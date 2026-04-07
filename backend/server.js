require("dotenv").config(); // ✅ VERY IMPORTANT

const express = require("express");
const mongoose = require("mongoose");
const Sentiment = require("sentiment");
const cors = require("cors");

const Post = require("./models/Post");

const app = express();
const sentiment = new Sentiment();

app.use(cors());
app.use(express.json());


// ✅ MongoDB Atlas Connection (FROM .env)
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected ✅"))
  .catch(err => console.log("DB Error:", err));


// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Server Running 🚀");
});


// ✅ ADD POST (single + multiple)
app.post("/addPost", async (req, res) => {
  try {
    let posts = req.body;

    if (!Array.isArray(posts)) {
      posts = [posts];
    }

    const processedPosts = posts.map((post) => {
      const commentsArray = Array.isArray(post.comments) ? post.comments : [];

      const analyzedComments = commentsArray.map((c) => {
        const result = sentiment.analyze(c.text || "");

        let sentimentType = "neutral";
        if (result.score > 0) sentimentType = "positive";
        else if (result.score < 0) sentimentType = "negative";

        return {
          text: c.text || "",
          sentiment: sentimentType
        };
      });

      return {
        username: post.username || "unknown",
        content: post.content || "",
        hashtags: Array.isArray(post.hashtags) ? post.hashtags : [],
        likes: post.likes || 0,
        comments: analyzedComments
      };
    });

    const saved = await Post.insertMany(processedPosts);

    res.json({
      message: "Posts added successfully ✅",
      data: saved
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ GET ALL POSTS (THIS MUST BE OUTSIDE)
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ TRENDING
app.get("/trending", async (req, res) => {
  try {
    const trends = await Post.aggregate([
      { $unwind: "$hashtags" },
      { $group: { _id: "$hashtags", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    res.json(trends);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ ACTIVE USERS
app.get("/active-users", async (req, res) => {
  try {
    const users = await Post.aggregate([
      { $group: { _id: "$username", totalPosts: { $sum: 1 } } },
      { $sort: { totalPosts: -1 } }
    ]);

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ LIKES
app.get("/likes", async (req, res) => {
  try {
    const likes = await Post.aggregate([
      { $group: { _id: "$username", totalLikes: { $sum: "$likes" } } }
    ]);

    res.json(likes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ PORT FIX (VERY IMPORTANT FOR DEPLOYMENT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT + " 🚀");
});
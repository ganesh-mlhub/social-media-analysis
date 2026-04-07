const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  sentiment: {
    type: String,
    required: true
  }
});

const postSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    hashtags: [String],
    likes: {
      type: Number,
      default: 0
    },
    comments: [commentSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
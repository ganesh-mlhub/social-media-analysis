import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import { motion } from "framer-motion";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function App() {
  const [trending, setTrending] = useState([]);
  const [users, setUsers] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const t = await axios.get("/trending");
      const u = await axios.get("/active-users");
      const l = await axios.get("/likes");

      setTrending(t.data || []);
      setUsers(u.data || []);
      setLikes(l.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  const cardStyle = {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "20px"
      }}
    >
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          textAlign: "center",
          color: "#fff",
          marginBottom: "30px"
        }}
      >
        🚀 Social Media Analytics Dashboard
      </motion.h1>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          maxWidth: "1100px",
          margin: "auto"
        }}
      >
        {/* Trending */}
        <motion.div whileHover={{ scale: 1.05 }} style={cardStyle}>
          <h2>🔥 Trending Hashtags</h2>
          <Bar
            data={{
              labels: trending.map(t => t._id),
              datasets: [
                {
                  label: "Hashtag Count",
                  data: trending.map(t => t.count),
                  backgroundColor: "#ff6384"
                }
              ]
            }}
          />
        </motion.div>

        {/* Users */}
        <motion.div whileHover={{ scale: 1.05 }} style={cardStyle}>
          <h2>👤 Active Users</h2>
          <Bar
            data={{
              labels: users.map(u => u._id),
              datasets: [
                {
                  label: "Total Posts",
                  data: users.map(u => u.totalPosts),
                  backgroundColor: "#36a2eb"
                }
              ]
            }}
          />
        </motion.div>

        {/* Likes */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ ...cardStyle, gridColumn: "span 2" }}
        >
          <h2>❤️ Likes Distribution</h2>
          <Pie
            data={{
              labels: likes.map(l => l._id),
              datasets: [
                {
                  data: likes.map(l => l.totalLikes),
                  backgroundColor: [
                    "#ff6384",
                    "#36a2eb",
                    "#ffce56",
                    "#4bc0c0",
                    "#9966ff"
                  ]
                }
              ]
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
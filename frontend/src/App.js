// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Bar, Pie } from "react-chartjs-2";
// import { motion } from "framer-motion";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Tooltip,
//   Legend
// );

// function App() {
//   const [trending, setTrending] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [likes, setLikes] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const t = await axios.get("https://social-backend-hq65.onrender.com/trending");
//       const u = await axios.get("https://social-backend-hq65.onrender.com/active-users");
//       const l = await axios.get("https://social-backend-hq65.onrender.com/likes");

//       setTrending(t.data);
//       setUsers(u.data);
//       setLikes(l.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const cardStyle = {
//     background: "#ffffff",
//     padding: "20px",
//     borderRadius: "20px",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #667eea, #764ba2)",
//         padding: "20px"
//       }}
//     >
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         style={{
//           textAlign: "center",
//           color: "#fff",
//           marginBottom: "30px"
//         }}
//       >
//         🚀 Social Media Analytics Dashboard
//       </motion.h1>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: "20px",
//           maxWidth: "1100px",
//           margin: "auto"
//         }}
//       >
//         <motion.div whileHover={{ scale: 1.05 }} style={cardStyle}>
//           <h2>🔥 Trending Hashtags</h2>
//           <Bar
//             data={{
//               labels: trending.map(t => t._id),
//               datasets: [
//                 {
//                   label: "Hashtag Count",
//                   data: trending.map(t => t.count),
//                   backgroundColor: "#ff6384"
//                 }
//               ]
//             }}
//           />
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.05 }} style={cardStyle}>
//           <h2>👤 Active Users</h2>
//           <Bar
//             data={{
//               labels: users.map(u => u._id),
//               datasets: [
//                 {
//                   label: "Total Posts",
//                   data: users.map(u => u.totalPosts),
//                   backgroundColor: "#36a2eb"
//                 }
//               ]
//             }}
//           />
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           style={{ ...cardStyle, gridColumn: "span 2" }}
//         >
//           <h2>❤️ Likes Distribution</h2>
//           <Pie
//             data={{
//               labels: likes.map(l => l._id),
//               datasets: [
//                 {
//                   data: likes.map(l => l.totalLikes),
//                   backgroundColor: [
//                     "#ff6384",
//                     "#36a2eb",
//                     "#ffce56",
//                     "#4bc0c0",
//                     "#9966ff"
//                   ]
//                 }
//               ]
//             }}
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default App;
///////////////

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Bar, Pie } from "react-chartjs-2";
// import { motion } from "framer-motion";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Tooltip,
//   Legend
// );

// function App() {
//   const [trending, setTrending] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [likes, setLikes] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const t = await axios.get("https://social-backend-hq65.onrender.com/trending");
//       const u = await axios.get("https://social-backend-hq65.onrender.com/active-users");
//       const l = await axios.get("https://social-backend-hq65.onrender.com/likes");

//       setTrending(t.data);
//       setUsers(u.data);
//       setLikes(l.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const cardStyle = {
//     background: "#ffffff",
//     padding: "15px",
//     borderRadius: "15px",
//     boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
//     width: "100%"
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #667eea, #764ba2)",
//         padding: "10px"
//       }}
//     >
//       {/* HEADER */}
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         style={{
//           textAlign: "center",
//           color: "#fff",
//           marginBottom: "20px",
//           fontSize: "22px"
//         }}
//       >
//         🚀 Social Media Analytics Dashboard
//       </motion.h1>

//       {/* GRID */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//           gap: "15px",
//           maxWidth: "100%",
//           margin: "auto"
//         }}
//       >
//         {/* Trending */}
//         <motion.div whileHover={{ scale: 1.03 }} style={cardStyle}>
//           <h2>🔥 Trending Hashtags</h2>
//           <div style={{ overflowX: "auto" }}>
//             <Bar
//               data={{
//                 labels: trending.map(t => t._id),
//                 datasets: [
//                   {
//                     label: "Hashtag Count",
//                     data: trending.map(t => t.count),
//                     backgroundColor: "#ff6384"
//                   }
//                 ]
//               }}
//               options={{ responsive: true }}
//             />
//           </div>
//         </motion.div>

//         {/* Users */}
//         <motion.div whileHover={{ scale: 1.03 }} style={cardStyle}>
//           <h2>👤 Active Users</h2>
//           <div style={{ overflowX: "auto" }}>
//             <Bar
//               data={{
//                 labels: users.map(u => u._id),
//                 datasets: [
//                   {
//                     label: "Total Posts",
//                     data: users.map(u => u.totalPosts),
//                     backgroundColor: "#36a2eb"
//                   }
//                 ]
//               }}
//               options={{ responsive: true }}
//             />
//           </div>
//         </motion.div>

//         {/* Likes */}
//         <motion.div
//           whileHover={{ scale: 1.03 }}
//           style={{ ...cardStyle, gridColumn: "span 2" }}
//         >
//           <h2>❤️ Likes Distribution</h2>
//           <div style={{ maxWidth: "400px", margin: "auto" }}>
//             <Pie
//               data={{
//                 labels: likes.map(l => l._id),
//                 datasets: [
//                   {
//                     data: likes.map(l => l.totalLikes),
//                     backgroundColor: [
//                       "#ff6384",
//                       "#36a2eb",
//                       "#ffce56",
//                       "#4bc0c0",
//                       "#9966ff",
//                       "#ff9f40"
//                     ]
//                   }
//                 ]
//               }}
//               options={{ responsive: true }}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default App;


///////////
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Bar, Pie } from "react-chartjs-2";
// import { motion } from "framer-motion";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Tooltip,
//   Legend
// );

// function App() {
//   const [trending, setTrending] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [likes, setLikes] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const t = await axios.get("https://social-backend-hq65.onrender.com/trending");
//       const u = await axios.get("https://social-backend-hq65.onrender.com/active-users");
//       const l = await axios.get("https://social-backend-hq65.onrender.com/likes");

//       setTrending(t.data);
//       setUsers(u.data);
//       setLikes(l.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const glassCard = {
//     background: "rgba(255,255,255,0.15)",
//     backdropFilter: "blur(15px)",
//     borderRadius: "20px",
//     padding: "20px",
//     boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
//     color: "#fff"
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #141e30, #243b55)",
//         padding: "20px",
//         fontFamily: "Arial, sans-serif"
//       }}
//     >
//       {/* HEADER */}
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         style={{
//           textAlign: "center",
//           marginBottom: "30px",
//           fontSize: "28px",
//           color: "#fff"
//         }}
//       >
//         🚀 Social Media Analytics Dashboard
//       </motion.h1>

//       {/* GRID */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//           gap: "20px",
//           maxWidth: "1200px",
//           margin: "auto"
//         }}
//       >
//         {/* Trending */}
//         <motion.div whileHover={{ scale: 1.05 }} style={glassCard}>
//           <h2>🔥 Trending Hashtags</h2>
//           <Bar
//             data={{
//               labels: trending.map(t => t._id),
//               datasets: [
//                 {
//                   label: "Count",
//                   data: trending.map(t => t.count),
//                   backgroundColor: "#ff7eb3"
//                 }
//               ]
//             }}
//           />
//         </motion.div>

//         {/* Users */}
//         <motion.div whileHover={{ scale: 1.05 }} style={glassCard}>
//           <h2>👤 Active Users</h2>
//           <Bar
//             data={{
//               labels: users.map(u => u._id),
//               datasets: [
//                 {
//                   label: "Posts",
//                   data: users.map(u => u.totalPosts),
//                   backgroundColor: "#7afcff"
//                 }
//               ]
//             }}
//           />
//         </motion.div>

//         {/* Likes */}
//         <motion.div whileHover={{ scale: 1.05 }} style={glassCard}>
//           <h2>❤️ Likes</h2>
//           <Pie
//             data={{
//               labels: likes.map(l => l._id),
//               datasets: [
//                 {
//                   data: likes.map(l => l.totalLikes),
//                   backgroundColor: [
//                     "#ff7eb3",
//                     "#7afcff",
//                     "#feff9c",
//                     "#a0c4ff",
//                     "#bdb2ff"
//                   ]
//                 }
//               ]
//             }}
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default App;

//////////////////////////////

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
      const base = "https://social-backend-hq65.onrender.com";
      const t = await axios.get(base + "/trending");
      const u = await axios.get(base + "/active-users");
      const l = await axios.get(base + "/likes");

      setTrending(t.data);
      setUsers(u.data);
      setLikes(l.data);
    } catch (err) {
      console.log(err);
    }
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "20px",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    color: "#fff"
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
        padding: "20px",
        fontFamily: "Inter, sans-serif"
      }}
    >
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "30px",
          fontWeight: "600",
          color: "#f1f5f9",
          letterSpacing: "1px"
        }}
      >
        📊 Social Media Analytics
      </motion.h1>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "auto"
        }}
      >
        {/* Trending */}
        <motion.div whileHover={{ scale: 1.03 }} style={cardStyle}>
          <h3 style={{ marginBottom: "10px" }}>🔥 Trending Hashtags</h3>
          <Bar
            data={{
              labels: trending.map(t => t._id),
              datasets: [
                {
                  label: "Usage",
                  data: trending.map(t => t.count),
                  backgroundColor: "#38bdf8"
                }
              ]
            }}
            options={{ responsive: true }}
          />
        </motion.div>

        {/* Users */}
        <motion.div whileHover={{ scale: 1.03 }} style={cardStyle}>
          <h3 style={{ marginBottom: "10px" }}>👤 Active Users</h3>
          <Bar
            data={{
              labels: users.map(u => u._id),
              datasets: [
                {
                  label: "Posts",
                  data: users.map(u => u.totalPosts),
                  backgroundColor: "#a78bfa"
                }
              ]
            }}
            options={{ responsive: true }}
          />
        </motion.div>

        {/* Likes */}
        <motion.div whileHover={{ scale: 1.03 }} style={cardStyle}>
          <h3 style={{ marginBottom: "10px" }}>❤️ Engagement</h3>
          <Pie
            data={{
              labels: likes.map(l => l._id),
              datasets: [
                {
                  data: likes.map(l => l.totalLikes),
                  backgroundColor: [
                    "#38bdf8",
                    "#a78bfa",
                    "#f472b6",
                    "#34d399",
                    "#facc15"
                  ]
                }
              ]
            }}
            options={{ responsive: true }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
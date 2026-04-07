# 📊 Social Media Analytics Dashboard

![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Status](https://img.shields.io/badge/Status-Live-success)

---

## 🚀 Live Demo

🔗 **Frontend (Live App):**
https://social-analytics-dashboard-gb.netlify.app

🔗 **Backend API:**
https://social-backend-hq65.onrender.com

---

## 📌 Project Overview

This is a **full-stack Social Media Analytics Dashboard** that analyzes user-generated content and extracts meaningful insights using data aggregation and sentiment analysis.

It demonstrates real-world skills like:

* REST API development
* NoSQL database modeling
* Data visualization
* Cloud deployment

---

## 🎯 Key Features

* ✅ Add single or multiple social media posts
* 💬 Perform **sentiment analysis** on user comments
* 🔥 Identify **trending hashtags**
* 👤 Analyze **active users**
* ❤️ Track **likes distribution**
* 📊 Visualize insights using interactive charts

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Chart.js
* Axios
* Framer Motion

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas (Cloud NoSQL Database)

---

## 📂 Project Structure

social-media-analysis/
│
├── backend/
│   ├── models/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   └── package.json
│
└── README.md

---

## ⚙️ How to Run Locally

### 1️⃣ Backend Setup

cd backend
npm install

Create a `.env` file:

MONGO_URI=your_mongodb_connection_string

Run server:

node server.js

---

### 2️⃣ Frontend Setup

cd frontend
npm install
npm start

---

## 🌐 API Endpoints

| Method | Endpoint      | Description               |
| ------ | ------------- | ------------------------- |
| POST   | /addPost      | Add one or multiple posts |
| GET    | /posts        | Get all posts             |
| GET    | /trending     | Get trending hashtags     |
| GET    | /active-users | Get most active users     |
| GET    | /likes        | Get likes analytics       |

---

## 📊 Visual Insights

* 🔥 Trending hashtags (Bar Chart)
* 👤 Active users (Bar Chart)
* ❤️ Likes distribution (Pie Chart)
* 💬 Sentiment classification (Positive / Neutral / Negative)

---

## 🚀 Deployment

* Frontend deployed on Netlify
* Backend deployed on Render
* Database hosted on MongoDB Atlas

---

## 🔐 Environment Variables

Create `.env` file in backend:

MONGO_URI=your_mongodb_connection_string
PORT=5000

---

## 💡 Future Improvements

* 🔐 User Authentication (JWT)
* ⚡ Real-time analytics (WebSockets)
* 🎨 Improved UI/UX (Tailwind CSS)
* 🤖 AI-based recommendations

---

## 👨‍💻 Author

**Ganesh Bhusare**
Artificial Intelligence & Data Science Student

---

## ⭐ Support

If you like this project:

⭐ Star the repository
🍴 Fork it
📢 Share it

---

## 📢 Note

This project is built for learning and demonstration purposes and showcases full-stack development and deployment skills.

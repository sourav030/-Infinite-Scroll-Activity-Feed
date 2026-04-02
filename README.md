📌 Infinite Scroll Activity Feed

A high-performance activity feed built using Vue.js, Node.js, Express, and MongoDB with cursor-based pagination and smooth infinite scrolling.

🚀 Features
🔄 Infinite Scroll (auto-load next data on scroll)
⚡ Cursor-based Pagination (lastId, limit)
📦 Efficient handling of large datasets
⏳ Loading state during API calls
🧹 Proper cleanup using lifecycle hooks
🗄️ MongoDB with seeded mock data (50+ records)
🛠️ Tech Stack
Frontend
Vue 3 (Composition API)
Axios
Backend
Node.js
Express.js
Database
MongoDB
📂 Project Structure
project-root/
│
├── frontend/        # Vue app
├── backend/         # Express server
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2️⃣ Setup Backend
cd backend
npm install
npm run dev

👉 Server runs on:
http://localhost:3000

3️⃣ Setup Frontend
cd frontend
npm install
npm run dev

👉 App runs on:
http://localhost:5173 (or Vite default)

🔗 API Endpoint
Get Posts (Paginated)
GET /api/v1/posts?lastId=<ID>&limit=10
Query Params:
Param	Description
lastId	Last fetched item ID (for pagination)
limit	Number of items per request
🔄 How Infinite Scroll Works
Initial load fetches first 50 posts
When user scrolls near bottom → next API call
lastId updates with last fetched post
New posts appended to existing list
Stops when hasMore = false

🧠 Key Concepts Used
Cursor-based pagination (better than offset for performance)
Scroll event handling
Vue lifecycle hooks:
onMounted → start fetching & add scroll listener
onUnmounted → cleanup event listeners
Reactive state management using ref()

👨‍💻 Author
Sourav Kumar Tiwari
GitHub: https://github.com/sourav030/-Infinite-Scroll-Activity-Feed


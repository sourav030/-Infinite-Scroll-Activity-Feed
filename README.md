Infinite Scroll Activity Feed
A high-performance activity feed built with Vue 3, Node.js, and MongoDB. This project demonstrates an optimized "Social Media" style feed using cursor-based pagination to ensure smooth performance even with large datasets.

🚀 Features
🔄 Infinite Scroll (auto-load next data on scroll)
⚡ Cursor-based Pagination (lastId, limit)
📦 Efficient handling of large datasets
⏳ Loading state during API calls
🧹 Proper cleanup using lifecycle hooks
🗄️ MongoDB with seeded mock data (50+ records)


.

🚀 Key Features
🔄 Infinite Scroll: Seamlessly auto-loads new content as the user reaches the bottom.

⚡ Cursor-based Pagination: Uses lastId logic for superior performance over traditional offset-based systems.

⏳ State Management: Robust handling of loading states, empty results, and "end of feed" indicators.

🧹 Memory Management: Automatic cleanup of scroll event listeners using Vue lifecycle hooks to prevent memory leaks.

🗄️ Pre-seeded Data: Includes a script to populate MongoDB with 50+ mock activity records.


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


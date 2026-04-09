# Infinite Scroll Activity Feed

A full-stack activity feed built with Vue 3, Express, and MongoDB.
The feed uses cursor-based pagination with virtualization for smooth scrolling performance on large datasets.

## Features

- Infinite scrolling feed with incremental loading
- Cursor-based pagination using lastId instead of offset
- Virtualized rendering using vue-virtual-scroller
- Toggle between row and grid layouts
- Loading and end-of-feed UI states
- Seed script for generating realistic mock posts

## Tech Stack

- Frontend: Vue 3, Vite, Axios, vue-virtual-scroller
- Backend: Node.js, Express, Mongoose
- Database: MongoDB

## Project Structure

Assignment2/
- frontend/
- server/
- README.md

## Prerequisites

- Node.js 18+
- npm
- MongoDB running locally (or a valid MongoDB URI)

## Backend Setup

1. Go to the server folder:

	cd server

2. Install dependencies:

	npm install

3. Create a .env file in server/ with:

	MONGO_URI=mongodb://127.0.0.1:27017/infiniteScroll
	PORT=3000

4. Optional: seed sample data:

	node seed.js

5. Start backend:

	npm run dev

Backend base URL:
http://localhost:3000

## Frontend Setup

1. Open a new terminal and go to frontend:

	cd frontend

2. Install dependencies:

	npm install

3. Start frontend:

	npm run dev

Frontend URL (default Vite):
http://localhost:5173

## API Reference

### Get Posts

- Method: GET
- Route: /api/v1/posts
- Query Params:
  - lastId (optional): last fetched post id for cursor pagination
  - limit (optional, default 50): number of posts to fetch

Example:
/api/v1/posts?lastId=67f89abc1234def56789abcd&limit=50

Response shape:

{
  "success": true,
  "data": [
	 {
		"_id": "...",
		"userName": "Rahul",
		"title": "How I learned Node.js in 30 days",
		"description": "...",
		"tags": ["nodejs", "backend"],
		"createdAt": "...",
		"updatedAt": "..."
	 }
  ],
  "hasMore": true
}

### Create Post

- Method: POST
- Route: /api/v1/createpost
- Required body fields: userName, title, description
- Optional body field: tags

## Notes

- The frontend currently requests posts from http://localhost:3000/api/v1/posts.
- Keep PORT=3000 on backend unless you also update the frontend API URL.
- The seed script uses mongodb://127.0.0.1:27017/infiniteScroll directly.

## Available Scripts

### server/package.json

- npm run dev: start backend with nodemon
- npm start: start backend with node

### frontend/package.json

- npm run dev: start Vite dev server
- npm run build: production build
- npm run preview: preview production build

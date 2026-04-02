const express = require('express');
const postRoute = express.Router();

const { createPost, getPosts } = require('../controller/postController');


postRoute.post('/createpost', createPost);


postRoute.get('/posts', getPosts);

module.exports = postRoute;
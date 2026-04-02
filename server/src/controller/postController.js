const Post = require('../model/post.Model');

const createPost = async (req, res) => {
    try {
        const { userName, title, description, tags } = req.body;

        
        if (!userName || !title || !description) {
            return res.status(400).json({
                message: "All required fields must be provided"
            });
        }

        const newPost = new Post({
            userName,
            title,
            description,
            tags
        });

       
        const savedPost = await newPost.save();

        res.status(201).json({
            message: "Post created successfully",
            data: savedPost
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Side Error"
        });
    }
};



const getPosts = async (req, res) => {
  try {
    const { lastId, limit = 10 } = req.query;

    let query = {};

    
    if (lastId) {
      query._id = { $lt: lastId };
    }

    const posts = await Post.find(query)
      .sort({ _id: -1 }) 
      .limit(parseInt(limit));

    res.status(200).json({
      success: true,
      data: posts,
      hasMore: posts.length === parseInt(limit),
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Side Error"
    });
  }
};


module.exports = { createPost ,getPosts};
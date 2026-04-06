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
    const { lastId, limit = 50 } = req.query;
    const parsedLimit = parseInt(limit);
    let query = {};

    if (lastId) {
      query._id = { $lt: lastId };
    }

    // Ek extra item mangwao check karne ke liye
    const posts = await Post.find(query)
      .sort({ _id: -1 }) 
      .limit(parsedLimit + 1);

    // Agar posts ki length limit se zyada hai, matlab aage aur data hai
    const hasMore = posts.length > parsedLimit;
    
    // Extra item ko response se hata do
    const data = hasMore ? posts.slice(0, -1) : posts;

    res.status(200).json({
      success: true,
      data: data,
      hasMore: hasMore,
    });

  } catch (error) {
    res.status(500).json({ message: "Server Side Error" });
  }
};



module.exports = { createPost ,getPosts};
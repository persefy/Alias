const { Post } = require('../models');

const getAllPost = async (req,res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const posts = await Post.findById(id);
        if (posts) {
            return res.json(posts);
        }
        return res.status(404).send('Posts are not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createPost = async (req, res) => {
    try {
        const posts = await new Post(req.body);
        await posts.save();
        return res.status(201).json({posts,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updatePost = async (req, res) => {
    try {
        let { id } = req.params;
        let posts = await Post.findByIdAndUpdate(id, req.body, { new: true })
        if (posts) {
            return res.status(200).json(posts)
        }
        throw new Error("Posts not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Post.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Post deleted");
        }
        throw new Error("Post not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllPost,
    getPostById,
    createPost,
    updatePost,
    deletePost
}
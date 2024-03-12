const { Tag } = require('../models');

const getAllTag = async (req,res) => {
    try {
        const tags = await Tag.find()
        res.json(tags)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getTagById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const tags = await Tag.findById(id);
        if (tags) {
            return res.json(tags);
        }
        return res.status(404).send('Tags are not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createTag = async (req, res) => {
    try {
        const tags = await new Tag(req.body);
        await tags.save();
        return res.status(201).json({tags,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateTag = async (req, res) => {
    try {
        let { id } = req.params;
        let tags = await Tag.findByIdAndUpdate(id, req.body, { new: true })
        if (tags) {
            return res.status(200).json(tags)
        }
        throw new Error("Tags not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteTag = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Tag.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Tag deleted");
        }
        throw new Error("Tag not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllTag,
    getTagById,
    createTag,
    updateTag,
    deleteTag
}
const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Post = new Schema(
    {
        title: {type: String, required: true},
        content: {type: String, required: true},
        alias: {type: String, required: true},
        date: {type: Date, required: true},
        user_id: {type: Schema.Types.ObjectId, ref: 'user_id'},
        tag_id: {type: Schema.Types.ObjectId, ref: 'tag_id'}
    },
    { timestamps: true }
)

module.exports = Post
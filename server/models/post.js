const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Post = new Schema(
    {
        title: {type: String, required: true},
        content: {type: String, required: true},
        alias: {type: String, required: true},
        date: {type: Date, required: true},
        user_id: {type: Schema.Types.ObjectId, ref: 'user_id'},
        tag1_id: {type: Schema.Types.ObjectId, ref: 'tag1_id'},
        tag2_id: {type: Schema.Types.ObjectId, ref: 'tag2_id'},
        tag3_id: {type: Schema.Types.ObjectId, ref: 'tag3_id'},
        tag4_id: {type: Schema.Types.ObjectId, ref: 'tag4_id'},
        tag5_id: {type: Schema.Types.ObjectId, ref: 'tag5_id'},
        resonateReactionCount: {type:Number},
        upsetReactionCount: {type:Number},
        feelReactionCount: {type:Number}
    },
    { timestamps: true }
)

module.exports = Post
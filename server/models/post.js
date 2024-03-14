const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Post = new Schema(
    {
        title: {type: String, required: true},
        content: {type: String, required: true},
        alias: {type: String, required: true},
        date: {type: Date, required: false},
        user_id: {type: Schema.Types.ObjectId, ref: 'user_id'},
        tagLifestyle: {type:Boolean, required:false},
        tagWork: {type:Boolean, required:false},
        tagFamily: {type:Boolean, required:false},
        tagRelationship: {type:Boolean, required:false},
        tagFriendship: {type:Boolean, required:false},
        resonateReactionCount: {type:Number},
        upsetReactionCount: {type:Number},
        feelReactionCount: {type:Number}
    },
    { timestamps: true }
)

module.exports = Post
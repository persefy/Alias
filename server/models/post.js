const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Post = new Schema(
    {
        title: {type: String, required: true},
        content: {type: String, required: true},
        alias: {type: String, required: true},
        date: {type: Date, required: true},
        user_id: {type: Schema.Types.ObjectId, ref: 'user_id'},
        tagLifestyle: {type:Boolean, required:true},
        tagWork: {type:Boolean, required:true},
        tagFamily: {type:Boolean, required:true},
        tagRelationship: {type:Boolean, required:true},
        tagFriendship: {type:Boolean, required:true},
        resonateReactionCount: {type:Number},
        upsetReactionCount: {type:Number},
        feelReactionCount: {type:Number}
    },
    { timestamps: true }
)

module.exports = Post
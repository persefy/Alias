const mongoose = require('mongoose')
const ContactMsgSchema = require('./contactMsg')
const PostSchema = require('./post')
const TagSchema = require('./tag')
const UserSchema = require('./user')

const ContactMsg = mongoose.model('ContactMsg', ContactMsgSchema)
const Post = mongoose.model('Post', PostSchema)
const Tag = mongoose.model('Tag', TagSchema)
const User = mongoose.model('User', UserSchema)


module.exports = {
    ContactMsg,
    Post,
    Tag,
    User
}
const mongoose = require('mongoose')
const ContactMsgSchema = require('./contactMsg')
const PostSchema = require('./post')
const UserSchema = require('./user')

const ContactMsg = mongoose.model('ContactMsg', ContactMsgSchema)
const Post = mongoose.model('Post', PostSchema)
const User = mongoose.model('User', UserSchema)


module.exports = {
    ContactMsg,
    Post,
    User
}
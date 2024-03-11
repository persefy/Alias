const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const ContactMsg = new Schema(
    {
        subject: {type: String, required: true},
        message: {type: String, required: true},
        date: {type: Date, required: true},
        sender: {type: String, required: true},
        senderEmail: {type: String, required: true}
    },
    { timestamps: true }
)

module.exports = ContactMsg
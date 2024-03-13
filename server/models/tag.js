const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Tag = new Schema(
    {
        label: {type: String, required: true}
    },
    { timestamps: true }
)

module.exports = Tag
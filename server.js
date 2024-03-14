require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./server/db/index')
const cors = require('cors')

// *****
const { ContactMsg, Post, User } = require('./server/models')
const contactMsgController = require('./server/controllers/contactMsgController')
const postController = require('./server/controllers/postController')
const userController = require('./server/controllers/userController')

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB Atlas connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('This is the landing page!'))

app.get('/contactMsg', contactMsgController.getAllContactMsg)
app.get('/contactMsg/:id', contactMsgController.getContactMsgById)
app.post('/contactMsg', contactMsgController.createContactMsg)
app.put('/contactMsg/:id', contactMsgController.updateContactMsg)
app.delete('/contactMsg/:id', contactMsgController.deleteContactMsg)

app.get('/post', postController.getAllPost)
app.get('/post/:id', postController.getPostById)
app.post('/post', postController.createPost)
app.put('/post/:id', postController.updatePost)
app.delete('/post/:id', postController.deletePost)

app.get('/user', userController.getAllUser)
app.get('/user/:id', userController.getUserById)
app.post('/user', userController.createUser)
app.put('/user/:id', userController.updateUser)
app.delete('/user/:id', userController.deleteUser)

app.get('*', (req, res) => {
	res.send('404 Not Found')
})

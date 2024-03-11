const db = require('../db')
const { ContactMsg } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const contactMsgs = [
    {
        subject: 'Need help creating account',
        message: 'If I choose a username, will that be kept private when I post?',
        date: '2024-03-02',
        sender: 'Fabian R.',
        senderEmail: 'zappyFellow@inmail.com'
    },  
    {
        subject: 'Great website',
        message: "Hi, just wanted to say - great platform you guys have here! I'm psyched about all the engagement my posts are getting!",
        date: '2024-03-08',
        sender: 'Fabian Romano.',
        senderEmail: 'zappyFellow@inmail.com'
    }
]
    await ContactMsg.insertMany(contactMsgs)
  
    console.log('Created initial messages!')
  }
  const run = async () => {
    await main()
    db.close()
  }
  
  run()
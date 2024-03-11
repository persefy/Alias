const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const users = [
    {
        fullName: 'Lydia Becker',
        username: '2morrow2Day',
        password: 'uAintDaBoss22',
        email: 'trueWordsZpoken@i-mail.com',
        phoneNumber: 220-991-9224,
        birthDate: '2000-01-22'
    },  
    {
        fullName: 'Fabian Romano',
        username: 'MellowHello',
        password: 'RainIznice2Hear!!',
        email: 'zappyFellow@inmail.com',
        phoneNumber: 601-223-9224,
        birthDate: '1990-10-15'
    }
]
 
    await User.insertMany(users)
  
    console.log('Created initial user accounts!')
  }
  
  const run = async () => {
    await main()
    db.close()
  }
  
  run()
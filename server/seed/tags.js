const db = require('../db')
const { Tag } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const tags = [
    {
      label: 'lifestyle'
    },
    {
      label: 'work'
    },
    {
      label: 'family'
    },
    {
      label: 'relationship'
    }, 
    {
      label: 'friendship'
    }
  ]
    await Tag.insertMany(tags)
  
    console.log('Created initial post tags!')
  }
  
  const run = async () => {
    await main()
    db.close()
  }
  
  run()
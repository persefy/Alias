const db = require('../db')
const { Post, User, Tag } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  //users
  const lydiaBecker = await User.find({fullName: 'Lydia Becker'})
  const fabianRomano = await User.find({fullName: 'Fabian Romano'})

  //Tag(s)
  const lifestyle = await Tag.find({label: 'lifestyle'})
  const work = await Tag.find({label: 'work'})
  const family = await Tag.find({label: 'family'})
  const relationship = await Tag.find({label: 'relationship'})
  const friendship = await Tag.find({label: 'friendship'})
  
  const posts = [
    {
      title: 'Love is still in the air',
      content: "Ut nisi massa, congue sed diam id, fermentum maximus neque. Cras suscipit ante lectus, vel semper sapien facilisis at. Donec hendrerit, eros laoreet malesuada pulvinar, tellus nunc luctus risus, quis pulvinar urna neque non enim.",
      alias: 'LB',
      date: '2024-02-23',
      user_id: lydiaBecker[0]._id,
      tag1_id: relationship[0]._id,
      tag2_id: '',
      tag3_id: '',
      tag4_id: '',
      tag5_id: '',
      resonateReactionCount: 1
    },  
    {
      title: 'Spring approaches',
      content: "Cras suscipit ante lectus, vel semper sapien facilisis at. Donec hendrerit, eros laoreet malesuada pulvinar, tellus nunc luctus risus, quis pulvinar urna neque non enim.",
      alias: 'LB',
      date: '2024-03-01',
      user_id: lydiaBecker[0]._id,
      tag1_id: lifestyle[0]._id,
      tag2_id: friendship[0]._id,
      tag3_id: '',
      tag4_id: '',
      tag5_id: '',
      resonateReactionCount: 2
    },  
    {
      title: "Aren't all meals foundationally sandwhiches?",
      content: "Ut nisi massa, congue sed diam id, fermentum maximus neque. Think on that",
      alias: 'youKnow',
      date: '2024-03-03',
      user_id: fabianRomano[0]._id,
      tag1_id: lifestyle[0]._id,
      tag2_id: '',
      tag3_id: '',
      tag4_id: '',
      tag5_id: '',
      resonateReactionCount: 2
    },  
    {
      title: 'Do you think that plants are really trying to hurt us?',
      content: 'Donec hendrerit, eros laoreet malesuada pulvinar, tellus nunc luctus risus, quis pulvinar urna neque non enim.',
      alias: 'youKnow',
      date: '2024-03-07',
      user_id: fabianRomano[0]._id,
      tag1_id: lifestyle[0]._id,
      tag2_id: '',
      tag3_id: '',
      tag4_id: '',
      tag5_id: '',
      resonateReactionCount: 1
    },
    {
      title: "Ignore the obvious, and you'll have to deall with surprises",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ex eget lectus scelerisque dignissim.',
      alias: 'LB',
      date: '2024-03-01',
      user_id: lydiaBecker[0]._id,
      tag1_id: family[0]._id,
      tag2_id: relationship[0]._id,
      tag3_id: '',
      tag4_id: '',
      tag5_id: '',
      resonateReactionCount: 0
    }
  ]
    await Post.insertMany(posts)
  
    console.log('Created initial posts!')
  }
  const run = async () => {
    await main()
    db.close()
  }
  
  run()
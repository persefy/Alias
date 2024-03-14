const db = require('../db')
const { Post, User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
	const lydiaBecker = await User.find({ fullName: 'Lydia Becker' })
	const fabianRomano = await User.find({ fullName: 'Fabian Romano' })

	const posts = [
		{
			title: 'Love is still in the air',
			content:
				'Ut nisi massa, congue sed diam id, fermentum maximus neque. Cras suscipit ante lectus, vel semper sapien facilisis at. Donec hendrerit, eros laoreet malesuada pulvinar, tellus nunc luctus risus, quis pulvinar urna neque non enim.',
			alias: 'LB',
			date: '2024-02-23',
			user_id: lydiaBecker[0]._id,
			tagLifestyle: false,
			tagWork: false,
			tagFamily: false,
			tagRelationship: true,
			tagFriendship: false,
			resonateReactionCount: 1,
			upsetReactionCount: 0,
			feelReactionCount: 3,
		},
		{
			title: 'Spring approaches',
			content:
				'Cras suscipit ante lectus, vel semper sapien facilisis at. Donec hendrerit, eros laoreet malesuada pulvinar, tellus nunc luctus risus, quis pulvinar urna neque non enim.',
			alias: 'LB',
			date: '2024-03-01',
			user_id: lydiaBecker[0]._id,
			tagLifestyle: true,
			tagWork: false,
			tagFamily: false,
			tagRelationship: false,
			tagFriendship: true,
			resonateReactionCount: 2,
			upsetReactionCount: 1,
			feelReactionCount: 0,
		},
		{
			title: "Aren't all meals foundationally sandwhiches?",
			content:
				'Ut nisi massa, congue sed diam id, fermentum maximus neque. Think on that',
			alias: 'youKnow',
			date: '2024-03-03',
			user_id: fabianRomano[0]._id,
			tagLifestyle: true,
			tagWork: false,
			tagFamily: false,
			tagRelationship: false,
			tagFriendship: false,
			resonateReactionCount: 2,
			upsetReactionCount: 1,
			feelReactionCount: 1,
		},
		{
			title: 'Do you think that plants are really trying to hurt us?',
			content:
				'Donec hendrerit, eros laoreet malesuada pulvinar, tellus nunc luctus risus, quis pulvinar urna neque non enim.',
			alias: 'youKnow',
			date: '2024-03-07',
			user_id: fabianRomano[0]._id,
			tagLifestyle: true,
			tagWork: false,
			tagFamily: false,
			tagRelationship: false,
			tagFriendship: false,
			resonateReactionCount: 1,
			upsetReactionCount: 0,
			feelReactionCount: 0,
		},
		{
			title: "Ignore the obvious, and you'll have to deall with surprises",
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ex eget lectus scelerisque dignissim.',
			alias: 'LB',
			date: '2024-03-01',
			user_id: lydiaBecker[0]._id,
			tagLifestyle: false,
			tagWork: false,
			tagFamily: true,
			tagRelationship: true,
			tagFriendship: false,
			resonateReactionCount: 0,
			upsetReactionCount: 2,
			feelReactionCount: 0,
		},
	]
	await Post.insertMany(posts)

	console.log('Created initial posts!')
}
const run = async () => {
	await main()
	db.close()
}

run()

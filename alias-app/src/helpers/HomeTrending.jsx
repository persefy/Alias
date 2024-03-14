import { useEffect, useState } from 'react'
import TrendingPost from './TrendingPosts'
import axios from 'axios'

function HomeTrending() {
	const [trendingPosts, setTrendingPosts] = useState([])

	useEffect(() => {
		const fetchTrendingPosts = async () => {
			try {
				const response = await axios.get('http://localhost:3001/post')
				setTrendingPosts(response.data.posts || [])
			} catch (error) {
				console.error('Error fetching trending posts:', error)
			}
		}
		fetchTrendingPosts()
	}, [])

	const calculateTotalEngagement = (post) => {
		return post.reactions
	}

	if (!Array.isArray(trendingPosts) || trendingPosts.length === 0) {
		return <div>No trending posts available</div>
	}

	const sortedTrendingPosts = trendingPosts.sort(
		(a, b) => calculateTotalEngagement(b) - calculateTotalEngagement(a)
	)
	const top3TrendingPosts = sortedTrendingPosts.slice(0, 3)

	return (
		<div>
			<h2> Trending Entries </h2>
			{top3TrendingPosts.map((post) => (
				<TrendingPost key={post.id} post={post} />
			))}
		</div>
	)
}

export default HomeTrending

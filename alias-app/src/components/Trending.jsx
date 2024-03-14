import { useEffect, useState } from 'react'
import Reactions from './Reactions'
import TrendingPosts from '../helpers/TrendingPosts'
import axios from 'axios'

function Trending({ post }) {
	const [trendingPosts, setTrendingPosts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchTrendingPosts = async () => {
			setIsLoading(true)
			try {
				const response = await axios.get('http://localhost:3001/post')
				const sortedPosts = response.data.posts.sort((a, b) => {
					const totalEngagementA = a.resonates + a.felt + a.upset
					const totalEngagementB = b.resonates + b.felt + b.upset
					return totalEngagementB - totalEngagementA
				})
				setTrendingPosts(sortedPosts)
			} catch (error) {
				setError(error)
			} finally {
				setIsLoading(false)
			}
		}
		fetchTrendingPosts()
	}, [])

	if (isLoading) {
		return <div>Loading trending posts...</div>
	}
	if (error) {
		return <div>Error: {error.message}</div>
	}

	return (
		<div>
			<h2>Trending Entries</h2>
			{trendingPosts.length === 0 ? (
				<div>No trending posts found.</div>
			) : (
				<div className="trending-posts">
					{trendingPosts.map((post) => (
						<TrendingPosts key={post.id} post={post} />
					))}
				</div>
			)}
		</div>
	)
}
export default Trending

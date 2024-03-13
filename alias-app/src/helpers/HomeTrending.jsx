import { useEffect, useState } from "react"
import TrendingPost from "./TrendingPosts"


function HomeTrending() {
	const [trendingPosts, setTrendingPosts] = useState([])

	useEffect(() => {
		const fetchTrendingPosts = async () => {
			try {
				const response = await fetch('api/trending/posts')
				const data = await response.json()
				setTrendingPosts(data.posts)
			} catch (error) {
				console.error('Error fetching trending posts:', error)
			}
		}
		fetchTrendingPosts()
	}, [])

	const calculateTotalEngagement = (post) => {
		return post.reactions
	}

	const sortedTrendingPosts = trendingPosts.sort((a, b) => {
		return calculateTotalEngagement(b) - calculateTotalEngagement(a)
	})

	const top3TrendingPosts = sortedTrendingPosts.slice(0, 3)


	return (
		<div>
			<h2> Trending Entries </h2>
			{top3TrendingPosts.map((post) => (
				<TrendingPost key={post.id} post={post} />
			))}
		{/* Component that is nested into Home */}
		{/* 
		- Display top [3] posts based on engagement = total count
		- greatest to least
		
		*/}
		</div>
	)
}
export default HomeTrending

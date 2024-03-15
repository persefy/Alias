import { useEffect, useState } from "react"
import Reactions from "../components/Reactions"
import AllPosts from '../components/AllPosts'
import axios from "axios"

function HomePosts({ startDate, endDate}) {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get('http://localhost:3001/post')
				if (response.data && Array.isArray(response.data)) {
					setPosts(response.data)
				} else {
					setPosts([])
				}
			} catch (error) {
				console.error('Error fetching posts:', error)
			}
		}
        fetchPosts()
	}, [])


	const filteredPosts = posts.filter(post => {
		const postDate = new Date(post.createdAt)
		return postDate >= startDate && postDate <= endDate
	})


	return (
		<div>
			<ul>
				{filteredPosts.map(post => (
					<li key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.content}</p>
						<Reactions postId={post.id} />
					</li>
				))}
			</ul>
			<hr />
			<AllPosts />
		</div>
	)
}
export default HomePosts
/* Component that is nested into Home */
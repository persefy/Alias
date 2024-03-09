import { useEffect, useState } from 'react'
import AddPost from '../helpers/AddPost'

function AllPosts() {
	const [posts, setPosts] = useState([])
	const [isLoading, setIsLoading] = useState()

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch ('api/posts')
				const data = await response.json()
				//sort
				const sortedPosts = data.posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
				setPosts(data.posts)
			} catch (error) {
				console.error('Error fetching posts:', error)
			}
		}
		fetchPosts()
	}, [])
	
	return (
		<div>
			<AddPost/>
			<div className='all-posts'>
				{posts.map(post => (
					<div key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.content}</p>
					</div>
				))}
			</div>
		{/* Dedicated page to display all the posts, in descending order (latest to oldest) */}
		</div>
	)
}
export default AllPosts

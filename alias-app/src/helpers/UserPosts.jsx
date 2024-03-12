import { useEffect, useState } from "react"
import axios from 'axios'


function UserPosts({ userId }) {
	const [userPosts, setUserPosts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)


	useEffect(() => {
		const fetchUserPosts = async () => {
			setIsLoading(true)
			try {
				const response = await axios.get(`api/user/${userId}/posts`)
				setUserPosts(response.data.posts)
			} catch (error) {
				console.error('Error fetching user posts:', error)
				setError(error)
			} finally {
				setIsLoading(false)
			}
		}
		fetchUserPosts()
	}, [userId])

	const handleDeletePost = async (postId) => {
		try {
			await axios.delete(`api/posts/${postId}`)
			setUserPosts(prevPosts => prevPosts.filter(post => post.id !== postId))
		} catch (error) {
			console.error('Error deleting post:', error)
		}
	}

	if (isLoading) {
		return <div> Loading user posts...</div>
	}
	if (error) {
		return <div> Error: {error.message}</div>
	}


	return (
		<div>
			<h2> User Posts </h2>
			{userPosts.length === 0 ? (
				<div> No posts found for this user.</div>
			) : (
				userPosts.map(post => (
					<div key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.content}</p>
						<button onClick={() => handleDeletePost(post.id)}> Delete </button>
					</div>
				))
			)}
		{/* Display all posts filtered by those created by user */}
		</div>
	)
}
export default UserPosts

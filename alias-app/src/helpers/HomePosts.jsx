import { useEffect, useState } from "react"

function HomePosts({ startDate, endDate}) {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/post')
                const sortedPosts = response.data.posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                setPosts(sortedPosts)
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
					</li>
				))}
			</ul>
		</div>
	)
}
export default HomePosts
/* Component that is nested into Home */
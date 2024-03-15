import { useEffect, useState } from 'react'
import axios from 'axios'
import AddPost from '../helpers/AddPost'
import Reactions from './Reactions'
import Tag from './Tag'

function AllPosts() {
	const [posts, setPosts] = useState([])
	const [tags] = useState(['lifestyle', 'work', 'family', 'relationship', 'friendship'])
	const [selectedTag, setSelectedTag] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)


	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get('http://localhost:3001/posts')
				//sort createdAt
                if (Array.isArray(response.data)) {
					console.log(response.data)
                    setPosts(response.data)
                } else {
                    setPosts([])
                }
                setIsLoading(false)
			} catch (error) {
				console.error('Error fetching posts:', error)
			}
		}
		fetchPosts()
	}, [])



//Conditional rendering
	if (isLoading) {
		return <div> Loading...</div>;
	}
	if (posts.length === 0) {
		return <div> No posts found. </div>;
	}
	if (error) {
		return <div> Error: {error.message}</div>;
	}
	
	
	return (
		<div>
			<AddPost />
			<div className='all-posts'>
				{posts && posts.length > 0 ? (
					posts.map((post, index) => (
						<div key={index}>
							<h3>{post.title}</h3>
							<p>{post.content}</p>
							<Reactions postId={post.id}/>
							<Tag tags={post.tags} />
						</div>
					))
				) : (
					<div> No posts found. </div>
				)}
			</div>
		</div>
	)
	
}

export default AllPosts

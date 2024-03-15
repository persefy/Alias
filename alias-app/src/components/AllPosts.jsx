import { useEffect, useState } from 'react'
import axios from 'axios'
import AddPost from '../helpers/AddPost'
import Reactions from './Reactions'
import Tag from './Tag'

function AllPosts() {
	const [posts, setPosts] = useState([])
	const [filteredPosts, setFilteredPosts] = useState([])
	const [tags] = useState(['lifestyle', 'work', 'family', 'relationship', 'friendship'])
	const [selectedTag, setSelectedTag] = useState('')
	const [isLoading, setIsLoading] = useState(true)


	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get('http://localhost:3001/post')
				//sort createdAt
                if (response.data.posts) {
                    const sortedPosts = response.data.posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    setPosts(sortedPosts)
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

	const handleTagClick = (tag, event) => {
		event.preventDefault()
		setSelectedTag((prevTags) => {
			const updatedTags = prevTags.includes(tag)
				? prevTags.filter((t) => t !== tag)
				: [...prevTags, tag]
			return updatedTags
		})
	}

	useEffect(() => {
		if (selectedTag) {
			const filtered = posts.filter((post) => post.tags.includes(selectedTag))
			setFilteredPosts(filtered)	
		} else {
			setFilteredPosts([])
		}
	}, [selectedTag, posts])


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
                {selectedTag ? (
                    // Render filtered posts if tag is selected
                    filteredPosts.map(post => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <Reactions postId={post.id}/>
                        </div>
                    ))
                ) : (
                    // Render all posts if no tag is selected
                    posts.map(post => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <Reactions postId={post.id}/>
                            <Tag tags={tags} onTagClick={handleTagClick} />
							<div>
								<p>Assigned Tags: </p>
								{post.tags.map((tag) => (
									<span key={tag}>{tag}</span>
								))}
							</div>
						</div>
                    ))
                )}
				{selectedTag === '' && <div> Please select a tag to filter posts. </div>}
            </div>
        </div>
    )
}

export default AllPosts

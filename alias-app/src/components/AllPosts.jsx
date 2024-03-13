import { useEffect, useState } from 'react'
import axios from 'axios'
import AddPost from '../helpers/AddPost'
import Reactions from './Reactions'
import Tag from './Tag'

function AllPosts() {
	const [posts, setPosts] = useState([])
	const [filteredPosts, setFilteredPosts] = useState([])
	const [tags, setTags] = useState(['lifestyle', 'work', 'family', 'relationship', 'friendship'])
	const [selectedTag, setSelectedTag] = useState('')


	const handleTagClick = (tag) => {
		setSelectedTag(tag)
		const filtered = posts.filter(post => post.tags.includes(tag))
		setFilteredPosts(filtered)
	}

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get('http://localhost:3001/post')
				//sort createdAt
				const sortedPosts = response.data.posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
				setPosts(sortedPosts)
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
                {selectedTag ? (
                    // Render filtered posts if tag is selected
                    filteredPosts.map(post => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <Reactions />
                        </div>
                    ))
                ) : (
                    // Render all posts if no tag is selected
                    posts.map(post => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <Reactions />
                            <Tag tags={tags} onTagClick={handleTagClick} />
                        </div>
                    ))
                )}
				{selectedTag === '' && <div> Please select a tag to filter posts. </div>}
            </div>
        </div>
    )
}

export default AllPosts

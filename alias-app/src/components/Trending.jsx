import { useEffect, useState } from "react"
import axios from 'axios'
import TrendingPosts from '../helpers/TrendingPosts'

function Trending() {
    const [trendingPosts, setTrendingPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchTrendingPosts = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get('http://localhost:3001/post');
                setTrendingPosts(response.data.posts || [] )
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
        return <div>Error fetching trending posts: {error.message}</div>
    }


	return (
        <div>
            <h2>Trending Entries</h2>
            {trendingPosts && trendingPosts.length === 0 ? (
                <div>No trending posts found.</div>
            ) : (
                <div className="trending-posts">
                    {trendingPosts.map(post => (
						<div key={post.id}>
							<h3>{post.title}</h3>
							<p>{post.content}</p>
                        	<TrendingPosts key={post.id} post={post} />
						</div>
					))}
                </div>
            )}
        </div>
    )
}
export default Trending

{/* Dedicated page to display all trending posts, in descending order (most engagement to least) */}
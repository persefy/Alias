
function HomePosts({ posts, startDate, endDate}) {
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
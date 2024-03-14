import Reactions from '../components/Reactions'

function TrendingPost({ post }) {
	console.log('Tags:', post.tags)

	return (
		<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content}</p>
			<div>
				<span>Tags: </span>
				{post.tags.map((tag) => (
					<span key={tag}>{tag}</span>
				))}
			</div>
			<Reactions postId={post.id} />
		</div>
	)
}

export default TrendingPost

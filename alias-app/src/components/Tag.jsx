

function Tag({tags, onTagClick}) {
	return (
		<div>
			{tags.map(tag => (
				<button key={tag} onClick={() => onTagClick(tag)}>
					{tag}
				</button>
			))}
			{/* Display selected tag filtered post list */}
		</div>
	)
}
export default Tag

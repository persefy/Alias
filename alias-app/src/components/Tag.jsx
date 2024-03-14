import { useState } from 'react'
import { Link } from 'react-router-dom'

function Tag({ tags, onTagClick }) {
	const [activeTags, setActiveTags] = useState([])

	const handleClick = (tag, event) => {
		event.preventDefault()
		const updatedActiveTags = activeTags.includes(tag)
			? activeTags.filter((t) => t !== tag)
			: [...activeTags, tag]
		setActiveTags(updatedActiveTags)
		onTagClick(tag)
	}

	return (
		<div>
			<h2>Tags</h2>
			<div>
				{tags &&
					tags.map((tag) => (
						<button
							key={tag}
							onClick={() => handleClick(tag)}
							className={activeTags.includes(tag) ? 'active' : ''}
						>
							{tag}
						</button>
					))}
			</div>
			<div>
				<h3>Active Tags</h3>
				{activeTags.length > 0 ? (
					<ul>
						{activeTags.map((tag) => (
							<li key={tag}>{tag}</li>
						))}
					</ul>
				) : (
					<p>No active tags</p>
				)}
			</div>
		</div>
	)
}

export default Tag

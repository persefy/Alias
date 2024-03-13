import { useState } from "react"
import { Link } from 'react-router-dom'

function Tag({ tags, onTagClick }) {
  // const tags = ['lifestyle', 'work', 'relationship', 'family', 'friendship']
  const [activeTags, setActiveTags] = useState([])

  const handleClick = (tag, event) => {
    event.preventDefault()
    // Toggle active state of the tag
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
        {tags.map((tag) => (
          <Link key={tag} to={`/tags/${tag}`}>
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={activeTags.includes(tag) ? 'active' : ''}
          >
            {tag}
          </button>
        </Link>
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
  );
}

export default Tag

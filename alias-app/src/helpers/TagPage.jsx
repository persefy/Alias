import React from 'react'
import { Link } from 'react-router-dom'


function TagPage() {
  const tags = ['lifestyle', 'work', 'family', 'relationship', 'friendship'];

  return (
    <div>
      <h2>Tags</h2>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            <Link to={`/tags/${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagPage

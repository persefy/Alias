import React from 'react';


function TagPage() {
  const tags = ['lifestyle', 'work', 'family', 'relationship', 'friendship'];

  return (
    <div>
      <h2>Tags</h2>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}

export default TagPage

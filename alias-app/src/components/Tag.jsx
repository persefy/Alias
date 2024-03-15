import { useState } from "react"


function Tag({ tags, onTagClick }) {
  const [activeTags, setActiveTags] = useState([])

  const handleTagClick = (tag) => {
    // Toggle active state of the tag
    const updatedActiveTags = activeTags.includes(tag)
      ? activeTags.filter((t) => t !== tag)
      : [...activeTags, tag]
    setActiveTags(updatedActiveTags)
    onTagClick(tag)

    console.log("Clicked tag:", tag)
  }

  return (
    <div>
      <h2></h2>
      <div>
        {tags && tags.map((tag) => (
          <button key={tag} onClick={(event) => handleTagClick(tag)}
          className={activeTags.includes(tag) ? "active" : ""} >
            {tag}
          </button>  
        ))}
      </div>
      <div>
        <h3></h3>
        {activeTags.length > 0 ? (
          <ul>
            {activeTags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Tag

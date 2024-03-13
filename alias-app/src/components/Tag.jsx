import { useState } from "react"

function Tag({ tags, onTagClick }) {
  const [activeTags, setActiveTags] = useState([])

  const handleClick = (tag, event) => {
    event.preventDefault(); // Prevent default form submission
    // Toggle active state of the tag
    const updatedActiveTags = activeTags.includes(tag)
      ? activeTags.filter((t) => t !== tag)
      : [...activeTags, tag]
    setActiveTags(updatedActiveTags)

    onTagClick(tag)
  };

  return (
    <div>
      {tags &&
        tags.map((tag) => (
          <button
            key={tag}
            onClick={(e) => handleClick(tag, e)} 
            className={activeTags.includes(tag) ? "active" : ""}
          >
            {tag}
          </button>
        ))}
    </div>
  );
}

export default Tag

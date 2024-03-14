import { useState } from 'react'
import { Link } from 'react-router-dom'

function AllTags ({ tags }) {
    const [selectedTag, setSelectedTag] = useState(null)
    // const tags = ['lifestyle', 'work', 'relationship', 'friendship', 'family']

    const handleTagClick = (tag) => {
        setSelectedTag(tag)
    }

    return (
        <div>
            <h2> Tags </h2>
            <ul>
                {tags.map(tag => (
                    <div key={tag}>
                        <Link to={`/tags/${tag}`} onClick={() => handleTagClick(tag)}>
                            {selectedTag === tag ? (
                                <button className='active'> {tag} </button>
                            ) : (
                                <button> {tag} </button>
                            )}
                        </Link>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default AllTags
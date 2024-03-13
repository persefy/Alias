import { useState } from "react"
import Tag from "../components/Tag"

function AddPost({ onSubmit }) {
  // Hardcoded list of tags
  const tags = ['lifestyle', 'work', 'family', 'relationship', 'friendship']

  const initialState = {
    title: "",
    alias: "",
    content: "",
    selectedTags: [],
    createdAt: new Date(),
  }

  const [postFormState, setPostFormState] = useState(initialState)
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      // Submit logic here
    } catch (error) {
      console.error("Error creating post:", error)
      setError(error)
    }
  }

  const handleChange = (event) => {
    setPostFormState({ ...postFormState, [event.target.id]: event.target.value })
  }

  const handleTagClick = (tag) => {
    setPostFormState({ ...postFormState, selectedTags: [...postFormState.selectedTags, tag] })
  }

  return (
    <div>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" onChange={handleChange} value={postFormState.title} />
        <label htmlFor="alias">Alias: </label>
        <input type="text" id="alias" onChange={handleChange} value={postFormState.alias} />
        <label htmlFor="content">What's on your mind?</label>
        <textarea id="content" cols="30" rows="30" onChange={handleChange} value={postFormState.content} />
        <Tag tags={tags} onTagClick={handleTagClick} />
        <button type="submit"> Post </button>
      </form>
      {/* Component that is nested into Home, and All Posts */}
    </div>
  )
}

export default AddPost

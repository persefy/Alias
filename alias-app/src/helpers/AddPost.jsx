import { useState } from "react"


function AddPost({ onSubmit }) {

	const initialState = {
		title: '',
		alias: '',
		content: '',
//chips instead of tags (it's the same thing but this is how we can make it buttons)
		chips: [],
		createdAt: new Date()
	}
	const [postFormState, setPostFormState] = useState(initialState)

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(postFormState)
		setPostFormState(initialState)
	}

	const handleChange = (event) => {
		setPostFormState({...postFormState, [event.target.id]: event.target.value})
	}

	const handleChipAddition = (chip) => {
		setPostFormState({...postFormState, chips: [...postFormState.chips, chip]})
	}

	return (
		<div>
			<h2>Create a Post</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title: </label>
				<input type="text" id="title" onChange={handleChange} value={postFormState.title}/>
				<label htmlFor="alias">Alias: </label>
				<input type="text" id="alias" onChange={handleChange} value={postFormState.alias}/>
				<label htmlFor="content">What's on your mind?</label>
				<textarea id="content" cols="30" rows="30" onChange={handleChange} value={postFormState.content}/>
				{/* <ChipInput onAddChip={handleChipAddition}/> */}
				<button type="submit"> Post </button>
			</form>
		{/* Component that is nested into Home, and All Posts */}
		</div>
	)
}
export default AddPost

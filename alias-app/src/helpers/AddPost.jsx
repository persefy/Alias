import { useState } from "react";
import axios from 'axios';
import Tag from '../components/Tag';

function AddPost() {
  const [postFormState, setPostFormState] = useState({
    title: '',
    alias: '',
    content: '',
    selectedTags: [],
    createdAt: new Date(),
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setPostFormState({ ...postFormState, [id]: value });
  };

  const handleTagClick = (tag) => {
    // event.preventDefault()
    setPostFormState((prevFormState) => ({
      ...prevFormState,
      selectedTags: prevFormState.selectedTags.includes(tag)
        ? prevFormState.selectedTags.filter((t) => t !== tag)
        : [...prevFormState.selectedTags, tag],
    }));
    console.log("Clicked tag:", tag)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/post', postFormState);
      console.log('Post created:', response.data);
      // Reset form state
      setPostFormState({
        title: '',
        alias: '',
        content: '',
        selectedTags: [],
        createdAt: new Date(),
      });
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" onChange={handleChange} value={postFormState.title} />
        <label htmlFor="alias">Alias: </label>
        <input type="text" id="alias" onChange={handleChange} value={postFormState.alias} />
        <label htmlFor="content">What's on your mind?</label>
        <textarea id="content" cols="30" rows="5" onChange={handleChange} value={postFormState.content} />
        <Tag tags={['lifestyle', 'work', 'family', 'relationship', 'friendship']} onTagClick={handleTagClick} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default AddPost;

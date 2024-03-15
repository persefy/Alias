//import all of the pages we'll be displaying in the Main part of the app
import Home from './Home'
import AllPosts from './AllPosts'
import Trending from './Trending'
import AllTags from '../helpers/AllTags'
import TagPage from '../helpers/TagPage'
import User from './User'
import Contact from './Contact'
import CreateAccount from './CreateAccount'
import Login from './Login'

import { Route, Routes } from 'react-router-dom'

function Main() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/posts/all" element={<AllPosts />} />
				<Route path="/posts/trending" element={<Trending />} />
				<Route path="/tags/:tag" element={<TagPage />} />
				<Route path="/tags" element={<AllTags />} />
				<Route path="/user/:username" element={<User />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/create" element={<CreateAccount />} />
			</Routes>
		</main>
	)
}
export default Main

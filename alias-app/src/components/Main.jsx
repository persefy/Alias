//import all of the pages we'll be displaying in the Main part of the app
import Home from './Home'
import AllPosts from './AllPosts'
import Trending from './Trending'
import Tag from './Tag'
import User from './User'
import Contact from './Contact'
import CreateAccount from './CreateAccount'

import { Route, Routes } from 'react-router-dom'

function Main() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/posts/all" element={<AllPosts />} />
				<Route path="/posts/trending" element={<Trending />} />
				<Route path="/posts/:label" element={<Tag />} />
				<Route path="/user/:id" element={<User />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/create/" element={<CreateAccount />} />
			</Routes>
		</main>
	)
}
export default Main

//import all of the pages we'll be displaying in the Main part of the app
import Home from './Home'
import AllPosts from './AllPosts'
import Trending from './Trending'
import Tag from './Tag'
import Tag from './User'
import Contact from './Contact'

import { Route, Routes } from 'react-router-dom'
import AllPosts from './AllPosts'

function Main() {
	return (
		<main>
			<Routes>
                <Route path='/' element={<Home/>}/>
                <Route exact path='/posts/all' element={<AllPosts/>}/>      
                <Route path='/posts/trending' element={<Trending/>}/>
				<Route path='/posts/:label' element={<Tag/>}/>
                <Route path='/user/:id' element={<User/>}/>
				<Route path='/contact' element={<Contact />}/>
            </Routes>
		</main>
	)
}
export default Main

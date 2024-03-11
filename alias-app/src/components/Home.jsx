import { useContext } from 'react'
import { UserContext } from '../UserContext'
import HomePosts from '../helpers/HomePosts'
import HomeTrending from '../helpers/HomeTrending'
import AddPost from '../helpers/AddPost'

function Home() {
	const { isLoggedIn } = useContext(UserContext)

	return (
		<div>
			<h2>Welcome to Alias</h2>
			<p>
				Alias is an open blog website where you can post your thoughts under an
				alias!
			</p>
			{isLoggedIn ? (
				<>
					<p>Welcome back!</p>
					<HomePosts />
					<HomeTrending />
					<AddPost />
				</>
			) : (
				<>
					<p>Please log in to see your posts.</p>
					<HomeTrending />
					<AddPost />
				</>
			)}
		</div>
	)
}
export default Home

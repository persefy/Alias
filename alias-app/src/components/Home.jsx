import HomePosts from '../helpers/HomePosts'
import HomeTrending from '../helpers/HomeTrending'
import AddPost from '../helpers/AddPost'

function Home() {
	const isLoggedIn = false
	// Are we using useContext here to pass down if the user is logged in across all pages?

	return (
		<div>
			<h2>Welcome to Alias</h2>
			<p>
				Alias is an open blog website where you can post your thoughts under an
				alias!
			</p>
			{isLoggedIn ? (
				<>
					<p>Please log in to see the posts</p>
					<HomeTrending />
					{/* add post button? */}
					<AddPost />
				</>
			) : (
				<>
					<HomePosts />
					<HomeTrending />
					<AddPost />
				</>
			)}
		</div>
	)
}
export default Home

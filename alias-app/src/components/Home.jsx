import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'
import HomePosts from '../helpers/HomePosts'
import HomeTrending from '../helpers/HomeTrending'
import AddPost from '../helpers/AddPost'

function Home() {
	const { isLoggedIn, userInfo } = useContext(UserContext)
	const userFullNameIs = userInfo.fullName
	const userEmailIs = userInfo.email
	console.log(`The user logged in name: ${userFullNameIs} and the email: ${userEmailIs}`)
	
	let userNameDisplay = document.querySelector('.userNameDisplay')
	if (isLoggedIn) {
		// userNameDisplay.innerHTML=`${userFullNameIs}`
	}
	return isLoggedIn ? (
		<div className='home'>
			<section className='homeIntro'>
				<h2>Welcome to Alias</h2>
				<p>
				Alias is an open blog website where you can post your thoughts under an
				alias!
				</p>
			</section>
			<p>Welcome back, <span className='userNameDisplay'></span></p>
			{/* Add user's name after the p tag content above */}
			<div className='addPostSection'>
				<AddPost />
			</div>
			<div className='allAndTrending'>
				<div className='homeTrending'>
					<HomeTrending />
					<Link className='linkFromHome' to='/posts/trending'>See all trending post</Link>
				</div>
				<div className='homePosts'>
					<HomePosts />
					<Link  className='linkFromHome' to='/posts/all'>See all posts</Link>
				</div>
			</div>
		</div>
	) : (
		<div className='home'>
			<section className='homeIntro'>
				<h2>Welcome to Alias</h2>
				<p>
				Alias is an open blog website where you can post your thoughts under an
				alias!
				</p>
			</section>

			{/* potentially move this note into  */}
			<p>Please log in to see your posts.</p>
			<div className='allAndTrending loggedOutHome'>
				<div className='homeTrending'>
					<HomeTrending />
				</div>
				<div className='homePosts loggedOutHomeSnippet'>
					<HomePosts />
				</div>
			</div>
		</div>
					
				
	)
}
export default Home

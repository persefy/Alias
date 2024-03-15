import { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Link } from 'react-router-dom'
import UserPosts from '../helpers/UserPosts'
import Contact from './Contact'
import Footer from './Footer'

function User() {
	const { setIsLoggedIn, userInfo } = useContext(UserContext)
	const username = userInfo.username

	const handleLogout = () => {
		setIsLoggedIn(false)
	}

	return (
		<>
			{username ? (
				<h1>Username: {username}</h1>
			) : (
				<h1>
					<Link to="/login">Log in</Link>
				</h1>
			)}
			<h2>Welcome to Alias</h2>
			<p>
				Write about what speaks to you. Hear what others have to say. And{' '}
				<span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Never</span>{' '}
				reveal your name.
			</p>
			<UserPosts />
			<Contact />
			<Footer />
			<button onClick={handleLogout}>Log Out</button>
		</>
	)
}
export default User

import { useContext } from 'react'
import { UserContext } from '../UserContext'
import UserPosts from '../helpers/UserPosts'
import AddPost from '../helpers/AddPost'
import TrendingPosts from '../helpers/TrendingPosts'
import Contact from './Contact'

function User() {
	const { setIsLoggedIn } = useContext(UserContext)
	const handleLogout = () => {
		setIsLoggedIn(false)
	}

	return (
		<>
			<h2>Welcome to Alias</h2>
			<p>
				Write about what speaks to you. Hear what others have to say. And{' '}
				<span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Never</span>{' '}
				reveal your name.
			</p>
			<AddPost />
			<UserPosts />
			<TrendingPosts />
			<Contact />
			<Footer />
			<button onClick={handleLogout}>Log Out</button>
		</>
	)
}
export default User

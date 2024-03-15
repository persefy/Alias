import { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Link } from 'react-router-dom'
import AllPosts from './AllPosts'

function User() {
	const { setIsLoggedIn, userInfo } = useContext(UserContext)

	const { username } = userInfo
	const { fullName } = userInfo

	return (
		<>
			{username ? (
				<>
					<p>{username}</p>
					<h3>Welcome back to your personal blogs</h3>
					<p>
						Write about what speaks to you. Hear what others have to say. And
						<span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
							{' '}
							Never
						</span>{' '}
						reveal your name.
					</p>
					<AllPosts />
				</>
			) : (
				<div>
					<h1>
						<Link to="/login">Log in</Link>
					</h1>
					<p>Please log in to see and post your blogs.</p>
				</div>
			)}
		</>
	)
}

export default User

import { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Link } from 'react-router-dom'

function User() {
	const { userInfo, setUserInfo, setIsLoggedIn } = useContext(UserContext)
	const { username } = userInfo.username

	const handleLogout = () => {
		setUserInfo({})
		setIsLoggedIn(false)
	}

	return (
		<div>
			{username ? (
				<>
					{username}
					<button onClick={handleLogout}>Logout</button>
				</>
			) : (
				<>
					User <Link to="/login">Login</Link>
				</>
			)}
		</div>
	)
}

export default User

import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { Link } from 'react-router-dom'

function Login() {
	const { setUserInfo, setIsLoggedIn } = useContext(UserContext)
	const [login, setLogIn] = useState({
		username: '',
		password: '',
	})
	const navigate = useNavigate()

	const handleChange = (e) => {
		setLogIn({ ...login, [e.target.id]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// console.log('Login form submitted', login)
		setUserInfo({ ...login, lastLogIn: new Date(Date.now()).toLocaleString() })
		console.log(login)
		// update login status
		setIsLoggedIn(true)
		// console.log('User created: ', { setUserInfo })
		navigate('/')
	}

	return (
		<div className="form">
			<h2>Log in</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					value={login.username}
					onChange={handleChange}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={login.password}
					onChange={handleChange}
				></input>
				<button type="submit">Log in</button>
			</form>
			<p>
				Don't have an Account? <Link to="/create">Create a new account</Link>
			</p>
		</div>
	)
}
export default Login

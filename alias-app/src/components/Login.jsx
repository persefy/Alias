import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../UserContext'

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

		setUserInfo({ ...login, lastLogIn: new Date(Date.now()).toLocaleString() })
		setIsLoggedIn(true)
		navigate('/user')
	}
	return (
		<div className="form">
			<h2>Log into your Alias account!</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					placeholder="Username"
					id="username"
					value={login.username}
					onChange={handleChange}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					placeholder="password"
					id="password"
					value={login.password}
					onChange={handleChange}
				></input>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
export default Login

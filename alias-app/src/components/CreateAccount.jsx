import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from 'alias-app/src/UserContext.jsx'

function CreateAccount() {
	const [userInfo, setUserInfo] = useState({
		fullName: '',
		username: '',
		password: '',
		email: '',
		phoneNumber: '',
		birthDate: '',
	})
	const { setIsLoggedIn } = useContext(UserContext)
	const navigate = useNavigate()

	const handleChange = (e) => {
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// send created account info to atlas?
		setIsLoggedIn(true)
		// navigate to user page after account is succesfully created
		navigate('/user')
	}

	return (
		<div className="form">
			<h2>Create New Account</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="fullName">Full Name</label>
				<input
					type="text"
					placeholder="Full Name"
					id="fullName"
					name="fullName"
					value={userInfo.fullName}
					onChange={handleChange}
				/>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					placeholder="Username"
					id="username"
					name="username"
					value={userInfo.username}
					onChange={handleChange}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					placeholder="Password"
					id="password"
					name="password"
					value={userInfo.password}
					onChange={handleChange}
				/>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					placeholder="Email"
					id="email"
					name="email"
					value={userInfo.email}
					onChange={handleChange}
				/>
				<label htmlFor="phoneNumber">Phone Number</label>
				<input
					type="text"
					placeholder="Phone Number"
					id="phoneNumber"
					name="phoneNumber"
					value={userInfo.phoneNumber}
					onChange={handleChange}
				/>
				<label htmlFor="birthDate">Birth Date</label>
				<input
					type="date"
					id="birthDate"
					name="birthDate"
					value={userInfo.birthDate}
					onChange={handleChange}
				/>
				<button type="submit">Create Account</button>
			</form>
		</div>
	)
}

export default CreateAccount

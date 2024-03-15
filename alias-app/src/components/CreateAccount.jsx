import { useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../UserContext'
import { Link } from 'react-router-dom'

function CreateAccount() {
	const initialState = {
		fullName: '',
		username: '',
		password: '',
		passwordConfirm: '',
		email: '',
		phoneNumber: '',
		birthdate: '',
		valid: true,
	}
	const [formState, setFormState] = useState(initialState)
	const [inputErrors, setInputErrors] = useState({})
	const [isAccountCreated, setIsAccountCreated] = useState(false)
	const { setIsLoggedIn, setUserInfo } = useContext(UserContext)
	const navigate = useNavigate()

	useEffect(() => {
		if (isAccountCreated) {
			const timer = setTimeout(() => {
				navigate('/')
			}, 2000) // will display message than navigate in 2 seconds
			return () => clearTimeout(timer)
		}
	}, [isAccountCreated, navigate])
	// Example from 'https://www.geeksforgeeks.org/using-settimeouts-in-react-components/'

	const handleChange = (e) => {
		// reset the valid flag back to true everytime user types something in the input to correct anything if it is incorrect
		setFormState({ ...formState, [e.target.id]: e.target.value, valid: true })
	}

	const validateUserInputs = () => {
		let isFormValid = true
		let errors = {}
		if (!formState.fullName) {
			errors.fullName = 'Full name is required'
			isFormValid = false
		}
		if (!formState.username) {
			errors.username = 'Username is required'
			isFormValid = false
		}
		if (formState.password.length < 7) {
			errors.password = 'Password must be at least 7 characters'
			isFormValid = false
		}
		if (formState.password !== formState.passwordConfirm) {
			errors.passwordConfirm = 'Passwords do not match'
			isFormValid = false
		}
		if (!formState.phoneNumber) {
			errors.phoneNumber = 'Phone number is required'
			isFormValid = false
		}
		if (!formState.email) {
			errors.email = 'Email is required'
			isFormValid = false
		}
		if (!formState.birthdate) {
			errors.birthdate = 'Birthdate is required'
			isFormValid = false
		}
		setFormState({ ...formState, valid: isFormValid })
		setInputErrors(errors)
		return isFormValid
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (validateUserInputs()) {
			setUserInfo({
				fullName: formState.fullName,
				username: formState.username,
				email: formState.email,
				phoneNumber: formState.phoneNumber,
				birthdate: formState.birthdate,
			})
			setIsLoggedIn(true)
			setIsAccountCreated(true)
		} else {
			console.log('Account creation unsuccessful')
			setIsAccountCreated(false)
		}
	}

	return (
		<div className="form">
			<h2>Create new account</h2>
			{isAccountCreated ? (
				<p className="valid">Thank you for creating an account!</p>
			) : (
				<form onSubmit={handleSubmit}>
					<label htmlFor="fullName">Full Name</label>
					<input
						type="text"
						id="fullName"
						value={formState.fullName}
						onChange={handleChange}
					/>
					{inputErrors.fullName && (
						<p className="error">{inputErrors.fullName}</p>
					)}

					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						value={formState.username}
						onChange={handleChange}
					/>
					{inputErrors.username && (
						<p className="error">{inputErrors.username}</p>
					)}

					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={formState.password}
						onChange={handleChange}
					/>
					{inputErrors.password && (
						<p className="error">{inputErrors.password}</p>
					)}

					<label htmlFor="passwordConfirm">Confirm password</label>
					<input
						type="password"
						id="passwordConfirm"
						value={formState.passwordConfirm}
						onChange={handleChange}
					/>
					{inputErrors.passwordConfirm && (
						<p className="error">{inputErrors.passwordConfirm}</p>
					)}

					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						value={formState.email}
						onChange={handleChange}
					/>

					<label htmlFor="phoneNumber">Phone Number</label>
					<input
						type="text"
						id="phoneNumber"
						value={formState.phoneNumber}
						onChange={handleChange}
					/>
					{inputErrors.phoneNumber && (
						<p className="error">{inputErrors.phoneNumber}</p>
					)}

					<label htmlFor="birthdate">Birthdate</label>
					<input
						type="date"
						id="birthdate"
						value={formState.birthdate}
						onChange={handleChange}
					/>
					{inputErrors.birthdate && (
						<p className="error">{inputErrors.birthdate}</p>
					)}
					<button type="submit">Create Account</button>
				</form>
			)}
			<p>
				Already have an Account? <Link to="/login">Log in</Link>
			</p>
		</div>
	)
}

export default CreateAccount

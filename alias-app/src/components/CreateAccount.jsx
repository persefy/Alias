import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from '../UserContext'

function CreateAccount() {
	const initialState = {
		fullName: '',
		username: '',
		password: '',
		passwordConfirm: '',
		email: '',
		phoneNumber: '',
		birthDate: '',
		valid: true,
	}
	const [formState, setFormState] = useState(initialState)
	const [inputErrors, setInputErrors] = useState({})
	const [isAccountCreated, setIsAccountCreated] = useState(false)
	const { setIsLoggedIn, setUserInfo } = useContext(UserContext)
	const navigate = useNavigate()

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
		if (!formState.birthDate) {
			errors.birthDate = 'Birth date is required'
			isFormValid = false
		}
		setFormState({ ...formState, valid: isFormValid })
		setInputErrors(errors)
		return isFormValid
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (validateUserInputs()) {
			// Assuming setUserInfo updates the user context, reflecting a successful account creation
			setUserInfo({
				fullName: formState.fullName,
				username: formState.username,
				email: formState.email,
				phoneNumber: formState.phoneNumber,
				birthDate: formState.birthDate,
			})
			setFormState(initialState)
			setIsLoggedIn(true)
			setIsAccountCreated(true)
			setTimeout(() => navigate('/user'), 2000)
		} else {
			console.log('Account creation unsuccessful')
			setIsAccountCreated(false)
		}
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
					value={formState.fullName}
					onChange={handleChange}
				/>
				{inputErrors.fullName && (
					<p className="error">{inputErrors.fullName}</p>
				)}

				<label htmlFor="username">Username</label>
				<input
					type="text"
					placeholder="Username"
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
					placeholder="Password"
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
					placeholder="Confirm password"
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
					placeholder="Email"
					id="email"
					value={formState.email}
					onChange={handleChange}
				/>

				<label htmlFor="phoneNumber">Phone Number</label>
				<input
					type="text"
					placeholder="Phone Number"
					id="phoneNumber"
					value={formState.phoneNumber}
					onChange={handleChange}
				/>
				{inputErrors.phoneNumber && (
					<p className="error">{inputErrors.phoneNumber}</p>
				)}

				<label htmlFor="birthDate">Birth Date</label>
				<input
					type="date"
					placeholder="Birth Date"
					id="birthDate"
					value={formState.birthDate}
					onChange={handleChange}
				/>
				{inputErrors.birthDate && (
					<p className="error">{inputErrors.birthDate}</p>
				)}
				{isAccountCreated && (
					<p className="valid">Account successfully created!</p>
				)}
				<button type="submit">Create Account</button>
			</form>
		</div>
	)
}

export default CreateAccount

import axios from 'axios'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../UserContext'
import '../App.css'

function Contact() {
	const { isLoggedIn, setIsLoggedIn, userInfo, setUserInfo } =
		useContext(UserContext)
	const initialState = {
		subject: '',
		message: '',
		date: '',
		sender: '',
		senderEmail: '',
	}
	const [formState, setFormState] = useState(initialState)
	const [pullUsers, setPullUsers] = useState([])

	useEffect(() => {
		setIsLoggedIn(true)
		const getUserInfo = async () => {
			try {
				const response = await axios.get('http://localhost:3001/user')
				setPullUsers(response.data)
				console.log(pullUsers, isLoggedIn)
				if (isLoggedIn) {
					console.log(pullUsers, isLoggedIn)

					let findUserId = pullUsers.findIndex((user) => {
						return user.username === '2morrow2Day'
					}) //ref: https://www.geeksforgeeks.org/javascript-get-the-index-of-an-object-by-its-property/
					console.log(findUserId)

					let userFullName = pullUsers[findUserId].fullName

					let userEmail = pullUsers[findUserId].email
					console.log(userFullName, userEmail)

					setUserInfo({
						...userInfo,
						fullName: `${userFullName}`,
						email: `${userEmail}`,
					})
				}
			} catch (error) {
				console.error('Error fetching user info:', error)
			}
		}
		getUserInfo()
	}, [])

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (
			formState.subject != '' &&
			formState.message != '' &&
			formState.date != ''
		) {
			if (isLoggedIn) {
				formState.sender = userInfo.fullName
				formState.senderEmail = userInfo.email
				console.log(formState)

				axios
					.post(`http://localhost:3001/contactMsg`, {
						// ref: https://axios-http.com/docs/post_example
						subject: `${formState.subject}`,
						message: `${formState.message}`,
						date: `${formState.date}`,
						sender: `${formState.sender}`,
						senderEmail: `${formState.senderEmail}`,
					})
					.then(function (response) {
						console.log(response)
					})
					.catch(function (error) {
						console.log(error)
					})

				document.querySelector('.formOrMsg').innerHTML =
					'Thank you! Your message has been sent.'

				setFormState(initialState)
			} else if (formState.sender != '' && formState.email != '') {
				console.log(`none of the fields are empty`)
				console.log(formState)

				axios
					.post(`http://localhost:3001/contactMsg`, {
						// ref: https://axios-http.com/docs/post_example
						subject: `${formState.subject}`,
						message: `${formState.message}`,
						date: `${formState.date}`,
						sender: `${formState.sender}`,
						senderEmail: `${formState.senderEmail}`,
					})
					.then(function (response) {
						console.log(response)
					})
					.catch(function (error) {
						console.log(error)
					})

				document.querySelector('.formOrMsg').innerHTML =
					'Thank you! Your message has been sent.'

				setFormState(initialState)
				console.log(
					'temp console log to show when user is logged out and form takes in data from manual input'
				)
			}
		} else {
			document.querySelector('.errorMsg').innerHTML =
				'Please fill in all fields to submit'
			console.log('please fill in all fields to submit')
		}
	}

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value })
	}

	return isLoggedIn ? (
		<div>
			<h2>Contact</h2>
			<div className="formOrMsg">
				<p>Send your feedback using the form below</p>
				<form onSubmit={handleSubmit} className="contactForm">
					<label htmlFor="subject">Subject:</label>
					<input
						type="text"
						id="subject"
						onChange={handleChange}
						value={formState.subject}
					/>
					<br />
					<label htmlFor="message">Message:</label>
					<textarea
						id="message"
						cols="30"
						rows="5"
						onChange={handleChange}
						value={formState.message}
					></textarea>
					<br />
					<div className="errorMsg"></div>
					<button
						type="submit"
						onClick={() => {
							formState.date = new Date(Date.now()).toLocaleString()
						}}
					>
						Send
					</button>
				</form>
			</div>
		</div>
	) : (
		<div>
			<h2>Contact</h2>
			<div className="formOrMsg">
				<p>Send your feedback using the form below</p>
				<form onSubmit={handleSubmit} className="contactForm">
					<label htmlFor="sender">Sender:</label>
					<input
						type="text"
						id="sender"
						onChange={handleChange}
						value={formState.sender}
					/>
					<br />
					<label htmlFor="senderEmail">Email:</label>
					<input
						type="text"
						id="senderEmail"
						onChange={handleChange}
						value={formState.senderEmail}
					/>
					<br />
					<label htmlFor="subject">Subject:</label>
					<input
						type="text"
						id="subject"
						onChange={handleChange}
						value={formState.subject}
					/>
					<br />
					<label htmlFor="message">Message:</label>
					<textarea
						id="message"
						cols="30"
						rows="5"
						onChange={handleChange}
						value={formState.message}
					></textarea>
					<br />
					<div className="errorMsg"></div>
					<button
						type="submit"
						onClick={() => {
							formState.date = new Date(Date.now()).toLocaleString()
						}}
					>
						Send
					</button>
				</form>
			</div>
		</div>
	)
}
export default Contact

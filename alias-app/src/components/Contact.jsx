import axios from "axios"
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../UserContext'
import '../App.css'

function Contact() {
	const { isLoggedIn, userInfo} = useContext(UserContext)
	//potentially remove, once getting info from API/user login state: 'setIsLoggedIn', 'userInfo', and 'setUserInfo' from above

	const userFullNameIs = userInfo.fullName
	const userEmailIs = userInfo.email

	const initialState = {
		subject: '',
		message: '',
		date: '', 
		sender: '',
		senderEmail: ''
	}

    const [formState, setFormState] = useState(initialState);

	//const [pullUsers, setPullUsers] = useState([]);

	let navigate = useNavigate()
	
	// useEffect(()=> {
		
	// // 	//temp code below
	// 	// setIsLoggedIn(false)
	// // 	//temp code above
	// 	const getUserInfo = async () => {
			
	// 		try {
	// 			const response = await axios.get('http://localhost:3001/user')
				
	// 			setPullUsers(response.data)
	// 			console.log(pullUsers, isLoggedIn)

	// 			if (isLoggedIn) {
	// 				console.log(pullUsers, isLoggedIn)
	// 				let findUserId = pullUsers.findIndex(user => { return user.username === '2morrow2Day'}) //ref: https://www.geeksforgeeks.org/javascript-get-the-index-of-an-object-by-its-property/
	// 				console.log(findUserId)
					
	// 				let userFullName = pullUsers[findUserId].fullName
	// 				let userEmail = pullUsers[findUserId].email
	// 				console.log(userFullName, userEmail)
					
	// 				setUserInfo({...userInfo, fullName: `${userFullName}`, email: `${userEmail}`})
	// 			}
	// 		} catch (error) {
	// 			console.error('Error fetching user info:', error)
	// 		}
	// 	}
	// 	//option 1 - we lose the grabbed axios data if the user refreshes the page
	// 	getUserInfo()
	//},[])
		//option 2 - alternate code to be implemented if we can get infinite loop to stop...
			//getUserInfo()
	// },[pullUsers,userInfo,isLoggedIn])


	const handleSubmit = async (event) => {
		event.preventDefault()
		//doing something with data

		if (formState.subject != '' 
			&& formState.message != '' 
			&& formState.date != '' ) {

			if (isLoggedIn) {
				formState.sender = userInfo.fullName
				formState.senderEmail = userInfo.email

				console.log(formState)

				//1 - post to DB
				axios.post(`http://localhost:3001/contactMsg`, { // ref: https://axios-http.com/docs/post_example
					subject: `${formState.subject}`,
					message: `${formState.message}`,
					date: `${formState.date}`,
					sender: `${formState.sender}`,
					senderEmail: `${formState.senderEmail}`
				})  
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
				console.log(error);
				});

				//2 - display success msg
				document.querySelector('.formOrMsg').innerHTML = '<p class="successMsg">Thank you! Your message has been sent.</p>'

				//3 - redirect
				setTimeout(()=> navigate('/'),10000);

				//reverting to our initial state
				setFormState(initialState)
			} 
			else if (formState.sender != ''&& formState.email!='') {
				//the send
				console.log(`none of the fields are empty`)
				//temp code below

				console.log(formState)

				//1 - post to DB

				axios.post(`http://localhost:3001/contactMsg`, { // ref: https://axios-http.com/docs/post_example
					subject: `${formState.subject}`,
					message: `${formState.message}`,
					date: `${formState.date}`,
					sender: `${formState.sender}`,
					senderEmail: `${formState.senderEmail}`
				})  
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
				console.log(error);
				});

				//2 - display success msg
				document.querySelector('.formOrMsg').innerHTML = '<p class="successMsg">Thank you! Your message has been sent.</p>'

				//3 - redirect
				setTimeout(()=> navigate('/'),10000);

				//reverting to our initial state
				setFormState(initialState)
				console.log('temp console log to show when user is logged out and form takes in data from manual input')
				//temp code above
				
			}
		} else {
			document.querySelector('.errorMsg').innerHTML = 'Please fill in all fields to submit'
			console.log('please fill in all fields to submit')
		}
	}

	const handleChange = (event) => {
	setFormState({...formState, [event.target.id]: event.target.value})
	}
	//form code above

	return isLoggedIn ? (
		<section className="contactPage">
			<h2>Contact</h2>
			<div className="formOrMsg">
				<p>Send your feedback using the form below</p>
				<form onSubmit={handleSubmit} className="contactForm">
					<label htmlFor="subject">Subject:</label>
					<input type="text" id="subject"
						onChange={handleChange}
						value={formState.subject}/>
					<br/>
					<label htmlFor="message" className="msg">Message:</label>
					<textarea id="message" cols="30" rows="5"
						onChange={handleChange}
						value={formState.message}></textarea>
					<br/>
					<div className="errorMsg"></div>
					<button type="submit" className="submitFormBtn" onClick={()=> {
							formState.date = new Date(Date.now()).toLocaleString()}}>Send</button>
				</form>
			</div>
		</section>
	) : (
		<section className="contactPage">
			<h2>Contact</h2>
			<div className="formOrMsg">
				<p>Send your feedback using the form below</p>
				<form onSubmit={handleSubmit} className="contactForm">
				<label htmlFor="sender">Sender:</label>
					<input type="text" id="sender"
						onChange={handleChange}
						value={formState.sender}/>
					<br/>
					<label htmlFor="senderEmail">Email:</label>
					<input type="text" id="senderEmail"
						onChange={handleChange}
						value={formState.senderEmail}/>
					<br />
					<label htmlFor="subject">Subject:</label>
					<input type="text" id="subject"
						onChange={handleChange}
						value={formState.subject}/>
					<br/>
					<span className="msgContain">
						<label htmlFor="message" className="msg">Message:</label>
						<br/>
						<textarea id="message" cols="30" rows="5"
							onChange={handleChange}
							value={formState.message}></textarea>
						<br/>
					</span>
					
					<div className="errorMsg"></div>
					<button type="submit" className="submitFormBtn" onClick={()=> {
					formState.date = new Date(Date.now()).toLocaleString()}}>Send</button>
				</form>
			</div>
		</section>
	)
}
export default Contact

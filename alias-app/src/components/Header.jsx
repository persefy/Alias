import Nav from './Nav'
import { useContext, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from '../UserContext'

function Header() {
	let navigate = useNavigate()
	
	const { isLoggedIn, setIsLoggedIn, userInfo, setUserInfo} = useContext(UserContext)
	//temp code below for testing
	useEffect(()=> {
		setIsLoggedIn(true)

	},[])
	//temp code above for testing

	return !isLoggedIn ? (
		<header>
			<h1 onClick={()=> {navigate('/')}}>Alias</h1>
			<div className='userMgmtNav'>
				<div>
					{/* <Link to="/login" className='logInLink'>Log In</Link> */}
					<Link to="/create" className='createLoginLink'>Create Account</Link>
				</div>
			</div>
			<Nav/>
		</header>
	): (
		<header>
			<h1 onClick={()=> {navigate('/')}}>Alias</h1>
			<div className='userMgmtNav'>
				<div>
					<Link to="/user/:username" className='userPgLink'>User</Link>
					<button className='logOutBtn' onClick={()=> {
						console.log('clicked on logout!')
						navigate('/')
						setIsLoggedIn(false)
						setUserInfo({})

						}}>Log Out</button>
				</div>
			</div>
			<Nav/>
		</header>
	)
}
export default Header

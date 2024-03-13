import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
	// set state to initially not logged in
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [userInfo, setUserInfo] = useState({})
	const value = { isLoggedIn, setIsLoggedIn, userInfo, setUserInfo }

	return (
		<>
			<UserContext.Provider value={value}>{children}</UserContext.Provider>
		</>
	)
}

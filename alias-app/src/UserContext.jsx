import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
	// set state to initially not logged in
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const value = { isLoggedIn, setIsLoggedIn }

	return (
		<>
			<UserContext.Provider value={value}>{children}</UserContext.Provider>
		</>
	)
}

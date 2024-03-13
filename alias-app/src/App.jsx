import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { UserProvider } from './UserContext'
import './App.css'

function App() {
	return (
		<>
			<UserProvider>
				<Header />
				<Main />
				<Footer />
			</UserProvider>
		</>
	)
}

export default App

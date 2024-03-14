import { Link } from 'react-router-dom'

function Nav() {
	return (
		<nav className="navbar">
			<div>
				<Link to="/">Home</Link>
				<Link to="/trending">Trending</Link>
				<Link to="/tags/:tag">Tags</Link>
			</div>
		</nav>
	)
}
export default Nav

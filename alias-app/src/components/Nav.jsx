import { Link } from 'react-router-dom'

function Nav() {
	return (
		<nav className="navbar">
			<h4>Alias</h4>
			<div>
				<Link to="/">Home</Link>
				<Link to="/trending">Trending</Link>
				<Link to="/tags/:id">Tags</Link>
			</div>
		</nav>
	)
}
export default Nav

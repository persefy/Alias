import { Link } from 'react-router-dom'

function Nav() {
	return (
		<nav className="navbar">
			<div className='topLevelLink'>
				<Link className='trendingLink' to="/posts/trending">Trending</Link>
				<div className='tagLink' onClick={()=> {
										document.querySelector('.tagLinkHolder').classList.toggle("toggleDisplay")
										}}>By Tag</div>
			</div>
			<div className='tagLinkHolder'>
				<Link className='tagItem' to="/tags/lifestyle" onClick={()=> {
										document.querySelector('.tagLinkHolder').addClass.toggle("toggleDisplay")
										}}>lifestyle</Link>
				<Link className='tagItem' to="/tags/work" onClick={()=> {
										document.querySelector('.tagLinkHolder').addClass.toggle("toggleDisplay")
										}}>work</Link>
				<Link className='tagItem' to="/tags/family" onClick={()=> {
										document.querySelector('.tagLinkHolder').addClass.toggle("toggleDisplay")
										}}>family</Link>
				<Link className='tagItem' to="/tags/relationship" onClick={()=> {
										document.querySelector('.tagLinkHolder').addClass.toggle("toggleDisplay")
										}}>relationship</Link>
				<Link className='tagItem' to="/tags/friendship" onClick={()=> {
										document.querySelector('.tagLinkHolder').addClass.toggle("toggleDisplay")
										}}>friendship</Link>
			</div>
		</nav>
	)
}
export default Nav

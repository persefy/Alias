import { Link } from 'react-router-dom'
import '../App.css'

function Footer() {
	return (
		<footer>
			<div className="footerCtaBtnContain">
				<p>Questions? Suggestions? We'd love to hear from you!</p>
				
				<Link to="/contact" className='contactCtaBtn'>Send Feedback</Link>

			</div>
			<div className="footerTeamRef">
				<p><span className='introToTeam'>Designed and developed by</span>
					<span className="teamMemberLink"> <a href='https://github.com/felixm126' target="_blank"><img src="https://img.icons8.com/fluency/48/000000/github.png" alt="github icon"/> &#64;felixm126</a></span>
					<span className="teamMemberLink"> <a href='https://github.com/MiaDHayes' target="_blank"><img src="https://img.icons8.com/fluency/48/000000/github.png" alt="github icon"/> &#64;MiaDHayes</a></span>
					<span className="teamMemberLink"> <a href='https://github.com/persefy' target="_blank"><img src="https://img.icons8.com/fluency/48/000000/github.png" alt="github icon"/> &#64;persefy</a></span>
				</p>
			</div>
			<div className='iconCredit'>
				Icons by <a target="_blank" href="https://icons8.com">Icons8</a>
			</div>
		</footer>
	)

}
export default Footer

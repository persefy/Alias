import HomePosts from '../helpers/HomePosts'
import HomeTrending from '../helpers/HomeTrending'
import AddPost from '../helpers/AddPost'

function Home() {
	return (
		<>
			<AddPost/>
			<HomePosts/>
			<HomeTrending/>
		</>
	)
}
export default Home

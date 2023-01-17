import { Link } from 'react-router-dom'
import SearchInput from '../SearchInput/SearchInput'
import RoomselectionModal from './RoomselectionModal'

const Header = () => {
	return (
		<div className='flex flex-row items-center border-b-2 w-full'>
			<Link to='/'><div className='text-5xl text-secondary font-extrabold ml-10'>OYO</div></Link>
			<div className='flex flex-row justify-center items-center ml-20 w-full'>
				<SearchInput border='border-l-2' />
				<RoomselectionModal />
				<button className='h-10 p-2 bg-secondary'>Search</button>
			</div>
		</div>
	)
}

export default Header

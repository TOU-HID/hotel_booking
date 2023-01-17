import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGuest } from './../../features/filter/felterSlice'

const TotalGuestsSelection = ({roomNo}) => {
	const dispatch = useDispatch()
	const [guestCount, setGuestCount] = useState(1)


	const guestCountHandeler = (n) => {
		setGuestCount(pre =>  pre + n)
		dispatch(addGuest({id: roomNo, guests: n}))
		console.log(roomNo)
	}


	return (
		<div className='flex flex-row justify-around items-center w-full border-b-2'>
			<div>Room {roomNo}</div>
			<div className='flex flex-row justify-around items-center'>
				<button
					className='text-3xl font-extrabold cursor-pointer'
					disabled={guestCount === 1}
					onClick={()=>guestCountHandeler(-1)}
				>
					-
				</button>
				<span className='mx-2'>{guestCount}</span>
				<button
					className='text-3xl font-extrabold cursor-pointer'
					onClick={()=>guestCountHandeler(1)}
				>
					+
				</button>
			</div>
		</div>
	)
}

export default TotalGuestsSelection

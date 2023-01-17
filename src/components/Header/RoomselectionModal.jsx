import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TotalGuestsSelection from './TotalGuestsSelection'
import { addGuest, removeRoom } from '../../features/filter/felterSlice'
import Button from "./Button"

const RoomselectionModal = () => {
	const dispatch = useDispatch()
	const { totalGuest } = useSelector(state => state.filter)
	const [show, setShow] = useState(false)
	const [totalRooms, setTotalRooms] = useState(1)
	let rooms = [...Array(totalRooms).keys()]
	const totalGuestCount = totalGuest.reduce((total, current) => {
		return total += current.guests
	}, 0)


	const addRoomHandeler = () => {
		setTotalRooms(pre => pre + 1)
		dispatch(addGuest({
			id: totalGuest.length + 1,
			guests: 1
		}))
	}


	const removeRoomHandeler = () => {
		setTotalRooms(pre => pre - 1)
		dispatch(removeRoom())
	}


	return (
		<div>
			<button type='button' className='w-44 h-10 p-2 bg-primary text-secondary font-medium text-xs border-2' onClick={() => setShow(!show)}>{totalRooms} Room, {totalGuestCount} Guests</button>
			<div className={`${show ? null : 'hidden'} fixed top-14 left-70 w-60 h-full z-10`} id='exampleModalSm' tabIndex='-1'>
				<div className='relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current border-2'>
					<div className='flex flex-col items-center justify-between p-4 border-b border-gray-200 w-full'>
						<div className='flex flex-row justify-around items-center text-lg font-medium text-gray-800 w-full' id='exampleModalSmLabel'>
							<div>Room</div>
							<div>Guests</div>
						</div>
						<div className='flex flex-col justify-around items-center w-full'>
							{rooms.map((item, i) => <TotalGuestsSelection key={i} roomNo={item + 1} />)}
						</div>
					</div>
					<div className='flex flex-row justify-between items-center p-1'>
						<Button title='Remove room' onClickHandeler={removeRoomHandeler} totalRooms={totalRooms} />
						<Button title='Add Room' onClickHandeler={addRoomHandeler} />
					</div>
				</div>
			</div>

		</div>
	)
}

export default RoomselectionModal

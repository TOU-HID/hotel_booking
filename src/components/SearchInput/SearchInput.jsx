import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchedLocation } from './../../features/filter/felterSlice'

function SearchInput({border}) {
	const dispatch = useDispatch()
	const [searchLocation, setSearchLocation] = useState('')


	const locationSearchHandler = e => {
		let timeout
		setSearchLocation(e.target.value)
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			dispatch(searchedLocation({ location: e.target.value }))
		}, 2000)
	}


	return (
		<div className='flex flex-col justify-start'>
			<input
				type='text'
				className={`pl-2 h-10 ${border ? border : 'border-x-2'} border-y-2`}
				value={searchLocation}
				placeholder='Search location...'
				onChange={e => locationSearchHandler(e)}
			/>
		</div>
	)
}

export default SearchInput

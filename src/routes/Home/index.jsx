import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterBox from '../../components/FilterBox/FilterBox'
import Header from '../../components/Header/Header'
import SingleHotel from '../../components/SingleHotel/SingleHotel'
import data from './../../data/data.json'
import { setHotelData } from './../../features/hotel/hotelSlice'

const Home = () => {
	const dispatch = useDispatch()
	const { listOfHotels } = useSelector(state => state.hotel)
	const { category, location, priceMin, priceMax } = useSelector(state => state.filter)


	useEffect(() => {
		let hotelsData = []
		if (category.length > 0 && location) {
			hotelsData = data.filter(item =>
				category.includes(item.category) &&
				item.address.toLowerCase() === location.toLowerCase() &&
				item.price >= priceMin &&
				item.price <= priceMax
			)
			dispatch(setHotelData({
				listOfHotels: hotelsData
			}))
		} else if (category.length > 0 && location === '') {
			hotelsData = data.filter(item =>
				category.includes(item.category) &&
				item.price >= priceMin &&
				item.price <= priceMax
			)
			dispatch(setHotelData({
				listOfHotels: hotelsData
			}))
		} else if (category.length === 0 && location) {
			hotelsData = data.filter(item =>
				item.address.toLowerCase() === location.toLowerCase() &&
				item.price >= priceMin &&
				item.price <= priceMax
			)
			dispatch(setHotelData({
				listOfHotels: hotelsData
			}))
		} else {
			hotelsData = data.filter(item =>
				item.price >= priceMin &&
				item.price <= priceMax
			)
			dispatch(setHotelData({
				listOfHotels: hotelsData
			}))
		}
	}, [dispatch, category, location, priceMin, priceMax])



	return (
		<div className='flex flex-col'>
			<Header />
			<div className='flex flex-row w-full'>
				<FilterBox data={data} />
				{listOfHotels.length === 0 ?
					<div className='text-2xl text-center font-bold w-full'>
						No Hotel Found
					</div>
					:
					<div className='flex flex-col'>
						{listOfHotels.map(item =>
							<SingleHotel
								key={item.id}
								item={item}
							/>
						)}
					</div>
				}
			</div>
		</div>
	)
}

export default Home

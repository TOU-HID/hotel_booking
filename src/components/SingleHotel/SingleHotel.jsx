import React from 'react'
import { Link } from 'react-router-dom'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import Rating from './Rating'

const SingleHotel = ({ item }) => {
	return (
		<div className='flex flex-row w-11/12 m-6 border-2'>
			<ImageCarousel images={item.images} centerSlidePercentage={50} />
			<div className='flex flex-col justify-between w-full ml-6'>
				<div className='text-4xl text-secondary font-bold'>{item.title}</div>
				<div className='text-xl my-2'>{item.address}</div>
				<Rating rating={item.rating} />
				<div className='text-lg font-bold my-2'>{item.category}</div>
				<div className='flex flex-row justify-between items-center w-full my-2'>
					<div className='text-3xl text-secondary font-semibold'>${item.price}</div>
					<Link to={`/room_details/${item.id}`} className='flex justify-center items-center font-bold w-28 h-12 border-2 mr-3 border-secondary rounded' >
						<span>View Details</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SingleHotel

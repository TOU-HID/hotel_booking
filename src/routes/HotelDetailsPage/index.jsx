import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Rating from '../../components/SingleHotel/Rating'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'

const HotelDetailsPage = () => {
	const param = useParams()
	const { listOfHotels } = useSelector(state => state.hotel)
	const thisHotelData = listOfHotels.find(item => item.id === param.id)

	return (
		<div>
			<Header />
			<div className='flex flex-col w-8/12 m-6 border-2'>
				<ImageCarousel
					images={thisHotelData.images}
					centerSlidePercentage={100}
				/>
				<div className='flex flex-col justify-between w-full ml-6'>
					<div className='text-4xl text-secondary font-bold'>
						{thisHotelData.title}
					</div>
					<div className='text-xl my-2'>
						{thisHotelData.address}
					</div>
					<Rating rating={thisHotelData.rating} />
					<div className='text-lg font-bold my-2'>
						{thisHotelData.category}
					</div>
					<div className='w-full my-2'>
						<div className='text-3xl text-secondary font-semibold'>
							${thisHotelData.price}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HotelDetailsPage

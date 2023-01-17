import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCategory, selectedPriceRange } from './../../features/filter/felterSlice'
import categoryData from './../../data/categoryData.json'
import SingleCategoryItem from './SingleCategoryItem'
import PriceRangeSlider from './PriceRangeSlider'
import SearchInput from '../SearchInput/SearchInput'

const FilterBox = ({ data }) => {
	const dispatch = useDispatch()
	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(0)



	useEffect(() => {
		let arrOfPrice = []
		data.map(item => arrOfPrice.push(item.price))
		let sortedPrice = arrOfPrice.sort((a, b) => a - b)
		setMinPrice(sortedPrice[0])
		setMaxPrice(sortedPrice[sortedPrice.length - 1])
	}, [data])



	const selectCategoryHandeler = (category) => {
		dispatch(setCategory({ category }))
	}

	

	const handlePriceInput = e => {
		dispatch(selectedPriceRange({
			priceMin: e.minValue,
			priceMax: e.maxValue
		}))
	}


	return (
		<div className='flex flex-col justify-center items-center w-3/12 h-fit border-r-2 border-b-2 border-slate-800 p-6'>
			<div className='text-3xl font-bold text-start text-secondary w-full mb-5'>Filter</div>
			<SearchInput />
			<PriceRangeSlider
				minPrice={minPrice}
				maxPrice={maxPrice}
				handlePriceInput={handlePriceInput}
			/>
			<div className='flex flex-col justify-start w-full mt-5'>
				<label className='text-xl font-bold'>Category</label>
				{categoryData.map(item =>
					<SingleCategoryItem
						key={item.id}
						item={item}
						selectCategoryHandeler={selectCategoryHandeler}
					/>
				)}
			</div>
		</div>
	)
}

export default FilterBox

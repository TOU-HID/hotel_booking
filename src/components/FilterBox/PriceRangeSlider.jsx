import MultiRangeSlider from 'multi-range-slider-react'

const PriceRangeSlider = ({minPrice, maxPrice, handlePriceInput}) => {

	return (
		<div className='flex flex-col justify-start w-full mt-5'>
				<div className='w-auto md:w-auto'>
					<label
						className='text-secondary mb-2 text-sm sm:text-lg font-bold'
					>
						Price
					</label>
					<label className='flex justify-between'>
						<span className='text-xs sm:text-md text-secondary'>
							{minPrice}
						</span>
						<span className='text-xs sm:text-md text-secondary'>
							{maxPrice}
						</span>
					</label>
					<MultiRangeSlider
						style={{
							border: 'none',
							boxShadow: 'none'
						}}
						thumbLeftColor={'#D22B2B'}
						barInnerColor={'#FFFFFF'}
						thumbRightColor={'#D22B2B'}
						label={false}
						ruler={false}
						min={minPrice}
						max={maxPrice}
						step={1}
						minValue={minPrice}
						maxValue={maxPrice}
						onInput={e => {
							handlePriceInput(e)
						}}
					/>
				</div>
			</div>
	)
}

export default PriceRangeSlider

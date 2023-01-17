import { useSelector } from 'react-redux'

function SingleCategoryItem({ item, selectCategoryHandeler }) {
	const { category } = useSelector(state => state.filter)

	return (
		<div className='flex flex-row justify-start items-center'>
			<div
				className={`border-2 border-solid border-secondary mr-2 rounded ${category === item.category ? null : 'w-5 h-5'}`}
				onClick={() => selectCategoryHandeler(item.category)}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={3}
					stroke='#fff'
					className={`w-4 h-4 ${category.includes(item.category) ? 'block bg-secondary' : 'hidden'}`}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M4.5 12.75l6 6 9-13.5'
					/>
				</svg>
			</div>
			<div>{item.category}</div>
		</div>
	)
}

export default SingleCategoryItem

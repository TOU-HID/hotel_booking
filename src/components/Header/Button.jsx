import React from 'react'

const Button = ({title, onClickHandeler, totalRooms}) => {
	return (
		<button
			type='button'
			className='p-1 text-black opacity-50 hover:text-black hover:opacity-75'
			onClick={onClickHandeler}
			disabled={totalRooms === 1}
		>
			{title}
		</button>
	)
}

export default Button

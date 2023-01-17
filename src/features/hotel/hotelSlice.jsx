import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	listOfHotels: [],
}

const hotelSlice = createSlice({
	name: 'hotel',
	initialState,
	reducers: {
		setHotelData: (state, action) => {
			state.listOfHotels = action.payload.listOfHotels
		}
	}
})

export const { setHotelData } = hotelSlice.actions
export default hotelSlice.reducer
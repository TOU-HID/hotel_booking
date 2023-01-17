import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalGuest: [{id: 1, guests: 1}],
	category: [],
	location: '',
	priceMin: 0,
	priceMax: 0
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		addGuest: (state, action) => {
			const itemIndex = state.totalGuest.findIndex(item => item.id === action.payload.id)
			if (itemIndex !== -1) {
				state.totalGuest[itemIndex].guests += action.payload.guests
			} else {
				state.totalGuest.push({id: action.payload.id, guests: action.payload.guests})
			}
		},
		removeRoom: (state) => {
			state.totalGuest.pop()
		},
		setCategory: (state, action) => {
			console.log(action)
			if (state.category.includes(action.payload.category)) {
				state.category = state.category.filter(item => item !== action.payload.category)
			} else {
				state.category = [...state.category, action.payload.category]
			}
		},
		searchedLocation: (state, action) => {
			state.location = action.payload.location
		},
		selectedPriceRange: (state, action) => {
			state.priceMin = action.payload.priceMin
			state.priceMax = action.payload.priceMax
		}
	}
})

export const { addGuest, removeRoom, setCategory, searchedLocation, selectedPriceRange } = filterSlice.actions
export default filterSlice.reducer
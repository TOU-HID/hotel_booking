import { configureStore } from '@reduxjs/toolkit'
import hotelSliceReducer from './../features/hotel/hotelSlice'
import filterSliceReducer from './../features/filter/felterSlice'

export const store = configureStore({
  reducer: {
    hotel: hotelSliceReducer,
    filter: filterSliceReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})

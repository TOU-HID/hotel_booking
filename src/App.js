import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import HotelDetailsPage from './routes/HotelDetailsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room_details/:id' element={<HotelDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

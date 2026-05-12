import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MediaDetail from './pages/MediaDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media/:id" element={<MediaDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
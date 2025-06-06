import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Search from './pages/Search'
import TVDetails from './pages/TvDetails'

function App() {
  return (
    <div>
 <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/search" element={<Search />} />
            <Route path="/tv/:id" element={<TVDetails />} />
          </Routes>

    </div>
  )
}

export default App
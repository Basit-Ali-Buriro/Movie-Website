import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import MovieInfo from '../components/MovieInfo';

function MovieDetails() {
  const id = useParams()
  console.log(id);
  
  return (
    <div>
      <Navbar/>
      <MovieInfo id={id}/>
    </div>
  )
}

export default MovieDetails
import React, { useState, useEffect } from 'react'
import { getMovies } from '../../api/movies'
import { Link } from 'react-router-dom'

const Admin = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies('action')
      .then(res => { setMovies(res.data.movies) })
    console.log(movies)
  }, [])

  return (
    <>
      <Link to={'/adminMovie/new'}>
        <button>Create New Movie</button>
      </Link>
      <div>
        {movies.map((movie) => {
          return (
            <Link to={`/adminMovie/${movie._id}`} key={movie._id}>
              <h1>{movie.title}</h1>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Admin

// get request to return all movies
// map all info about the movie on click
// Update any given info

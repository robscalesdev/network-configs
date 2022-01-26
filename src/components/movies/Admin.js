import React, { useState, useEffect } from 'react'
import { getMovies } from '../../api/movies'
import { Link } from 'react-router-dom'

const Admin = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies('trending')
      .then(res => {
        res.data.movies.forEach(element => {
          setMovies(prev => [...prev, element])
        })
      })
      .catch(console.error)
  }, [])

  // useEffect(() => {
  //   getMovies('action')
  //     .then(res => {
  //       setMovies(movies.concat(res.data.movies))
  //     })
  //     .catch(console.error)
  // }, [])

  return (
    <>
      <h4>For demo purposes</h4>
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

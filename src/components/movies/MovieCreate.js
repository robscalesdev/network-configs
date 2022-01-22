import React, { useState } from 'react'
import { createMovie } from '../../api/movies'
import { Navigate } from 'react-router-dom'

const MovieCreate = () => {
  const [movie, setMovie] = useState({})
  const [created, setCreated] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    createMovie(movie)
      .then(() => {
        setCreated(true)
      })
  }

  const handleChange = (event) => {
    console.log(event.target.name)
    console.log(movie)
    setMovie({ ...movie, [event.target.name]: event.target.value })
  }

  if (created) {
    return <Navigate to='/admin' />
  }

  return (
    <div>
      <img src={movie.image} />
      <form onSubmit={handleSubmit}>
        <button>Create Movie</button>
        <label>
          Title:
          <input
            type='text'
            name='title'
            value={movie.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type='text'
            name='image'
            value={movie.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Genre:
          <input
            type='text'
            name='genre'
            value={movie.genre}
            onChange={handleChange}
          />
        </label>
        <label>
          Link:
          <input
            type='text'
            name='link'
            value={movie.link}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type='textarea'
            name='description'
            value={movie.description}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  )
}

export default MovieCreate

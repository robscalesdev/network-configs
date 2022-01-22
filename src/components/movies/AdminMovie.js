import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovie, changeMovie } from '../../api/movies'

const AdminMovie = () => {
  const [movie, setMovie] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getMovie(id)
      .then(res => { setMovie(res.data.movie) })
    console.log(movie)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    changeMovie(id, movie)
  }

  const handleChange = (event) => {
    console.log(event.target.name)
    console.log(movie)
    setMovie({ ...movie, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <img src={ movie.image } />
      <form onSubmit={handleSubmit}>
        <button>Update</button>
        <label>
          Title:
          <input type='text' name='title' value={movie.title} onChange={handleChange} />
        </label>
        <label>
          Image:
          <input type='text' name='image' value={movie.image} onChange={handleChange} />
        </label>
        <label>
          Genre:
          <input type='text' name='genre' value={movie.genre} onChange={handleChange} />
        </label>
        <label>
          Link:
          <input type='text' name='link' value={movie.link} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type='textarea' name='description' value={movie.description} onChange={handleChange} />
        </label>
      </form>
    </div>
  )
}

export default AdminMovie

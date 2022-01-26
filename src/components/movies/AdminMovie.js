import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getMovie, changeMovie } from '../../api/movies'

const AdminMovie = () => {
  const [movie, setMovie] = useState({})
  const [updated, setUpdated] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    getMovie(id)
      .then(res => { setMovie(res.data.movie) })
    console.log(movie)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    changeMovie(id, movie)
      .then(() => {
        setUpdated(true)
      })
  }

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value })
  }

  if (updated) {
    return <Navigate to='/admin' />
  }

  return (
    <div>
      <img style={{ width: '20rem' }} src={ movie.image } />
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
      <div>
        <p>Lorem Ipsum 100 words:</p>
        <p>tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet </p>
      </div>
    </div>
  )
}

export default AdminMovie

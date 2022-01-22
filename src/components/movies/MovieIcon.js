import React, { useEffect, useState } from 'react'
import styles from '../styles/Movie.module.css'
import { getMovies } from '../../api/movies'

// const iconImage = 'https://i.imgur.com/NeB2R69.jpeg'

const MovieIcon = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    getMovies()
      .then(response => {
        console.log(movie)
        setMovie(response.data.movie)
      })
      .catch(console.error)
  }, [])

  return (
    <>
      <div className={styles.movieIcon} >
        <img src={ movie.image }/>
        <h4>{movie.title}</h4>
      </div>
    </>
  )
}

export default MovieIcon

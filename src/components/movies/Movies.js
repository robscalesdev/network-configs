import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Row from './Row'

import styles from '../styles/Movies.module.css'

import { getMovies } from '../../api/movies'

const Movies = ({ user }) => {
  const [bannerMovie, setBannerMovie] = useState({})
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
      .then(res => {
        setMovies(res.data.movies)
        setBannerMovie(res.data.movies[Math.floor(Math.random() * res.data.movies.length)])
      })
  }, [])

  // converts incoming movies into a genre array
  const convertArrayToObject = (array, key) =>
    array.reduce(
      (obj, item) => ({
        ...obj,
        [item[key]]: item
      }),
      {}
    )

  const genres = Object.keys(convertArrayToObject(movies, 'genre'))

  return (
    <main className={styles.main}>
      <Banner movie={bannerMovie}/>
      {genres.map(genre => {
        return <Row key={genre} genre={genre} user={user} movies={movies}/>
      })}
    </main>

  )
}

export default Movies

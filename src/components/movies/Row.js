import React, { useEffect, useState } from 'react'
import MovieIcon from './MovieIcon'
import { Link } from 'react-router-dom'
import styles from '../styles/Row.module.css'

const Row = ({ genre, movies }) => {
  const [genreMovies, setGenreMovies] = useState([])

  useEffect(() => {
    setGenreMovies(movies.filter(movie => {
      return movie.genre === genre
    }))
  }, [])

  return (
    <div className={styles.row}>
      <h4>{genre}</h4>
      <div style={{
        height: 'fit-content',
        display: 'flex',
        overflowX: 'scroll',
        textDecoration: 'none',
        padding: '0.5rem'
      }}>
        {genreMovies.map(movie => {
          return (
            <Link className={styles.link} to={`/movies/${movie._id}`} key={movie._id}>
              <MovieIcon movie={movie}/>
            </Link>
          )
        })}
      </div>
    </div>

  )
}

export default Row

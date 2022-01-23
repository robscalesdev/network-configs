import React from 'react'
import MovieIcon from './MovieIcon'
import { Link } from 'react-router-dom'
import styles from '../styles/Row.module.css'

const Row = ({ genre, movies }) => {
  return (
    <div className={styles.row}>
      <h3>{genre}</h3>
      <div style={{
        display: 'flex',
        overflowX: 'scroll',
        textDecoration: 'none'
      }}>
        {movies.map(movie => {
          return (
            <Link style={{ textDecoration: 'none', color: '#111' }} to={`/movies/${movie._id}`} key={movie._id}>
              <MovieIcon movie={movie}/>
            </Link>
          )
        })}
      </div>
    </div>

  )
}

export default Row

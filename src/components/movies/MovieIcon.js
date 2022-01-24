import React from 'react'
import styles from '../styles/Movie.module.css'

const MovieIcon = ({ movie }) => {
  // const [large] = useState(true)

  return (
    <div className={styles.movie}>
      <div className={styles.movieIcon}>
        <img style={{ width: '100%', height: '100%', outline: 'none' }} src={movie.image} />
      </div>
      <h4 className={styles.movieText}>{movie.title}</h4>
    </div>
  )
}

export default MovieIcon

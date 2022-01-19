import React from 'react'
import MessageBoard from './MessageBoard'
import styles from '../styles/Movie.module.css'

const Movie = () => {
  return (
    <div>
      <div className={ styles.movie }>
        <h1>message board</h1>
      </div>
      <MessageBoard />
    </div>
  )
}

export default Movie

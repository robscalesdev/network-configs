import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MessageBoard from './MessageBoard'
import Video from './Video'
import styles from '../styles/Movie.module.css'

import { getMovie } from '../../api/movies'

const Movie = ({ user }) => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    getMovie(id)
      .then(res => {
        setMovie(res.data.movie)
      })
  }, [])

  return (
    <div className={styles.display}>
      <Video movie={movie}/>
      <MessageBoard user={user}/>
    </div>
  )
}

export default Movie

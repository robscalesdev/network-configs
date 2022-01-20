import React from 'react'
import MessageBoard from './MessageBoard'
// import styles from '../styles/Movie.module.css'

const Movie = ({ user }) => {
  return (
    <div>
      <div style={{
        width: '100%',
        height: '70vh',
        borderStyle: 'solid',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1>message board link</h1>
      </div>
      <MessageBoard user={user}/>
    </div>
  )
}

export default Movie

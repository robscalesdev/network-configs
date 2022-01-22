import React from 'react'

const MovieIcon = ({ movie }) => {
  return (
    <div style={{
      width: '300px',
      height: '100px',
      border: 'solid',
      margin: '5px'
    }}>
      <p>{movie.title}</p>
    </div>
  )
}

export default MovieIcon

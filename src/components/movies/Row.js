import React from 'react'
import MovieIcon from './MovieIcon'

const Row = ({ genre }) => {
  return (
    <div>
      <h3>{genre}</h3>
      <div style={{
        display: 'flex'
      }}>
        <MovieIcon />
        <MovieIcon />
        <MovieIcon />
        <MovieIcon />
        <MovieIcon />
        <MovieIcon />
        <MovieIcon />
      </div>
    </div>

  )
}

export default Row

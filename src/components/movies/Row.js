import React from 'react'
import MovieIcon from './MovieIcon'
import { Link } from 'react-router-dom'

const Row = ({ genre, movies }) => {
  return (
    <div style={{ overflowX: 'scroll' }}>
      <h3>{genre}</h3>
      <div style={{
        display: 'flex'
      }}>
        {movies.map(movie => {
          return (
            <Link to={`/movies/${movie._id}`} key={movie._id}>
              <MovieIcon movie={movie}/>
            </Link>
          )
        })}
      </div>
    </div>

  )
}

export default Row

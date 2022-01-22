import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Row from './Row'

import { getMovies } from '../../api/movies'

const Movies = ({ user }) => {
  // banner (main view 70%)
  const [trendingNow, setTrendingNow] = useState([])
  // const [genres] = useState(['Action', 'Comedies', 'Inspirational', 'Romance', 'Explosions', 'Potato Flicks'])
  // const [movieList, setMovieList] = useState([])
  const [actionMovies, setActionMovies] = useState([])

  useEffect(() => {
    getMovies('trending')
      .then(res => {
        setTrendingNow(res.data.movies)
        console.log(res.data.movies)
      })
  }, [])

  // useEffect(() => {
  //   for (let i = 0; i < genres.length; i++) {
  //     getMovies(genres[i])
  //       .then(res => {
  //         setMovieList(...movieList, [genres[i], res.data.movies])
  //       })
  //   }
  // }, [])

  useEffect(() => {
    getMovies('action')
      .then(res => {
        setActionMovies(res.data.movies)
        console.log(res.data.movies)
      })
  }, [])

  return (
    <main>
      <Banner />
      <Row genre={ 'Trending Now' } user={user} movies={trendingNow}/>
      <Row genre={ 'Action Movies' } user={user} movies={actionMovies}/>
      {/* {movieList.map(genre => {
        return <Row key={genre[0]} genre={ genre[0] } movies={genre[1]} />
      })
      } */}
    </main>

  )
}

export default Movies

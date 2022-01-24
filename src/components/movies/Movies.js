import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Row from './Row'

import styles from '../styles/Movies.module.css'

import { getMovies } from '../../api/movies'

const Movies = ({ user }) => {
  // banner (main view 70%)
  const [trendingNow, setTrendingNow] = useState([])
  // const [genres] = useState(['Rock', 'Classic Rock', 'Metal', 'Jazz', 'Techno', 'kpop'])
  // const [movieList, setMovieList] = useState([])
  const [rock, setRock] = useState([])
  const [cRock, setCRock] = useState([])
  const [metal, setMetal] = useState([])
  const [jazz, setJazz] = useState([])
  const [techno, setTechno] = useState([])
  const [kpop, setKPop] = useState([])

  useEffect(() => {
    getMovies('trending')
      .then(res => {
        setTrendingNow(res.data.movies)
        console.log(res.data.movies)
      })
  }, [])

  useEffect(() => {
    getMovies('rock')
      .then(res => {
        setRock(res.data.movies)
        console.log(res.data.movies)
      })
  }, [])

  useEffect(() => {
    getMovies('cRock')
      .then(res => {
        setCRock(res.data.movies)
        console.log(res.data.movies)
      })
  }, [])

  useEffect(() => {
    getMovies('metal')
      .then(res => {
        setMetal(res.data.movies)
        console.log(res.data.movies)
      })
  }, [])

  useEffect(() => {
    getMovies('jazz')
      .then(res => {
        setJazz(res.data.movies)
        console.log(res.data.movies)
      })
  }, [])

  useEffect(() => {
    getMovies('techno')
      .then(res => {
        setTechno(res.data.movies)
        console.log(res.data.movies)
      })
  }, [])

  useEffect(() => {
    getMovies('kpop')
      .then(res => {
        setKPop(res.data.movies)
        console.log(res.data.movies)
      })
  }, [])

  return (
    <main className={styles.main}>
      <Banner movie={trendingNow[0]}/>
      <Row genre={ 'Trending Now' } user={user} movies={trendingNow}/>
      <Row genre={ 'Rock' } user={user} movies={rock}/>
      <Row genre={ 'Classic Rock' } user={user} movies={cRock}/>
      <Row genre={ 'Metal' } user={user} movies={metal}/>
      <Row genre={ 'Jazz' } user={user} movies={jazz}/>
      <Row genre={ 'Techno' } user={user} movies={techno}/>
      <Row genre={ 'kpop' } user={user} movies={kpop}/>
    </main>

  )
}

export default Movies

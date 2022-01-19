import React from 'react'
import Banner from './Banner'
import Row from './Row'

const Movies = () => {
  // banner (main view 70%)
  return (
    <main>
      <Banner />
      <Row genre={ 'Trending Now' }/>
      <Row genre={ 'Title one' } />
      <Row genre={ 'Title two' } />

    </main>

  )
}

export default Movies

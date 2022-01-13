import React from 'react'
import Banner from './Banner'
import Row from './Row'
import { withRouter } from 'react-router-dom'

const Movies = () => {
  // banner (main view 70%)
  return (
    <main>
      <Banner />
      <Row genre={ 'Trending Now' }/>
      <Row genre={ 'Actions' } />
      <Row genre={ 'Comedies' } />

    </main>

  )
}

export default withRouter(Movies)

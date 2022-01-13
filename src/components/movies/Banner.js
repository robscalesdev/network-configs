import React from 'react'

const Banner = () => {
  // background image

  return (
    <div col-sm style={ {
      width: '100%',
      height: '75vh',
      borderStyle: 'solid',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      flexGrow: '0'
    }}>
      <h2>Movie Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <button>Play</button>
      <button>More Info</button>
    </div>
  )
}

export default Banner

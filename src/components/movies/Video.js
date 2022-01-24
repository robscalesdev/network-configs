import React from 'react'
import styles from '../styles/Video.module.css'

const Video = ({ movie }) => {
  // const [width] = useState(window.getComputedStyle(document.documentElement)['font-size'] * 50)

  return (
    <>
      <div style={{
        width: '100%',
        height: '60vh',
        borderStyle: 'solid',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className={styles.videoResponsive}>
          <h1>{movie.title}</h1>
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${movie.link}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </>
  )
}

export default Video

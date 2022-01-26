import React, { useState, useEffect } from 'react'
import styles from '../styles/Banner.module.css'
import { Link } from 'react-router-dom'

// const pic1 = 'https://images-na.ssl-images-amazon.com/images/I/819cf1ZR2WL.jpg'

const Banner = ({ movie }) => {
  const [hovered, setHovered] = useState(false)
  const [percent, setPercent] = useState('')
  const [year, setYear] = useState('')
  const [seasons, setSeasons] = useState('')

  useEffect(() => {
    setPercent(randomNum(90, 98))
    setYear(randomNum(1990, 2022))
    setSeasons(randomNum(1, 9))
  }, [])

  let description = movie.description
  const cutDescriptionLength = (words) => {
    if (words.length > 100) {
      words = movie.description.slice(0, 100)
      description = words + '...Read More'
    }
  }
  if (movie.description) {
    cutDescriptionLength(movie.description)
  }

  const randomNum = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${movie.image})` }}>
      <div className={styles.containerLeft}>
        <h4 className={styles.originalLeft}>MUSICFLIX <span className={styles.originalRight}>(non)ORIGINAL</span></h4>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.randomInfo}>
          <div className={styles.match}>{percent}% Match</div>
          <div className={styles.year}>{year}</div>
          <div className={styles.seasons}>{seasons} Seasons</div>
          <div className={styles.ultraHd}><p>4k Ultra HD</p></div>
          <div className={styles.modelNumber}><p>5.1</p></div>
        </div>
        <div className={styles.descriptionContainer}>
          <div
            className={styles.description}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {hovered ? <p>{movie.description}</p> : <p>{description}</p>}
          </div>
          <div className={styles.bannerButtons}>
            <Link to={`/movies/${movie._id}`}>
              <button className={styles.infoBtn}>
                ▶ Play
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

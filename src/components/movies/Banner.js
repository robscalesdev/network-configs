import React, { useState, useEffect } from 'react'
import styles from '../styles/Banner.module.css'
const pic1 = 'https://images-na.ssl-images-amazon.com/images/I/819cf1ZR2WL.jpg'
const Banner = () => {
  const [movie, setMovie] = useState('')
  const [showHide, setShowHide] = useState(false)
  const [hovered, setHovered] = useState(false)
  // const data = movie.description

  const info = {
    title: 'Dying Hard With More Force Applied.....2!!',
    description:
      'Dying has never been so easy. Yippy Ki Yui Yayy Mother F****R. P.S. Tis The Season For A Great Christmas Movie.Dying has never been so easy. Yippy Ki Yui Yayy Mother F****R. P.S. Tis The Season For A Great Christmas Movie.Dying has never been so easy. Yippy Ki Yui Yayy Mother F****R. P.S. Tis The Season For A Great Christmas Movie.Dying has never been so easy. Yippy Ki Yui Yayy Mother F****R. P.S. Tis The Season For A Great Christmas Movie hi.'
  }
  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await
    // }
    setMovie(pic1)
  }, [])

  const toggle = () => {
    showHide ? setShowHide(false) : setShowHide(true)
  }

  let description = ''
  const cutDescriptionLength = (words) => {
    words = info.description.slice(0, 100)
    description = words + '...Read More'
    return description
  }
  cutDescriptionLength(info.description)

  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${movie})` }}>
      <div className={styles.containerLeft}>
        <h2 className={styles.title}>{info.title}</h2>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {hovered ? info.description : description}
          </div>
          <div className={styles.bannerButtons}>
            <button className={styles.infoBtn} onClick={toggle}>
              Read More
            </button>
            <button className={styles.infoBtn}>More Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

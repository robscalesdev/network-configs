import React, { useState, useEffect } from 'react'
import styles from '../styles/Banner.module.css'
const pic1 = 'https://images-na.ssl-images-amazon.com/images/I/819cf1ZR2WL.jpg'
const Banner = () => {
  const [movie, setMovie] = useState('')

  const info = {
    title: 'Dying Hard With More Force Applied.....2!!',
    description: 'Dying has never been so easy. Yippy Ki Yui Yayy Mother F****R. P.S. Tis The Season For A Great Christmas Movie.'
  }
  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await
    // }
    setMovie(pic1)
  }, [])

  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${movie})` }}>
      <h2 className={styles.title}>{info.title}</h2>
      <div>
        <textarea className={styles.description} rows='4' cols='2'>
          {info.description}
        </textarea>
        <div className={styles.bannerButtons}>
          <button className={styles.infoBtn}>read more</button>
          <button className={styles.infoBtn}>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default Banner

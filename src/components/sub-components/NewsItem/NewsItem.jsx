import React from 'react'
import styles from './NewsItem.module.css'
import img from '../../../container/img/act1.jpg'


export const NewsItem = (props) => {
  return (
    <div >
      
      <div className={styles.newsWrapper}>
      <img src={img} className = {styles.newsImg} alt="" />
      <p>February 10, 2023</p>
      <h3>Up Down OMV Out Now</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eligendi est exercitationem illo laudantium quia!</p>
      </div>
    
    </div>
  )
}

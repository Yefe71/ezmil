import React from 'react'
import styles from './NewsItem.module.css'
import img from '../../../container/img/act1.jpg'


export const NewsItem = () => {
  return (
    <div >
      
      <div className={styles.newsParent}>
      <img src={img} className = {styles.newsImg} alt="" />
      <p>February 10, 2023</p>
      <h3>Up Down Official MV Out Now</h3>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eligendi est exercitationem illo laudantium quia!</h3>
      </div>
    
    </div>
  )
}

import React from 'react'
import styles from './NewsItem.module.css'
import img from '../../../container/img/act1.jpg'


export const NewsItem = (props) => {
  console.log(props.img)
  return (
  
    <div className= {styles.swiperNews}>

      <div className={styles.newsWrapper}>
      <a href= {`${props.link}`}>
          <img src={props.img} className={styles.newsImg} alt="" />
          </a>
        <p className={styles.date}>{props.date}</p>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.caption}>{props.caption}</p>
      </div>
     
    </div>
    
  )
}
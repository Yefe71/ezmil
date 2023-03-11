import React, { useRef, useState } from "react";
import NewsData from "../../Data/NewsData"
import { NewsItem } from "../sub-components/NewsItem/NewsItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import bg from "../../container/img/bgresonances1.jpg";
import styles from "./News.module.css";

// import required modules
import { Grid, Pagination } from "swiper";

export default function App() {
  return (
    <div >
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 2,
        }}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className = {styles.mySwiper}
      >
        {NewsData.map((newsItem) => {
          return (          
            <SwiperSlide className={`${styles.swiperSlide} `}>
            <NewsItem title={newsItem.title} date={newsItem.date} caption = {newsItem.caption} img = {newsItem.img} link = {newsItem.link}/>
          
          </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
}

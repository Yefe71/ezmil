import React, { useRef, useState, useEffect } from "react";
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
  const [slidesPerView, setSlidesPerView] = useState(4);
  useEffect(() => {
   

    const handleWindowResize = () => {
      if (window.innerWidth <= 734) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 948) {
        setSlidesPerView(2);
      } else if (window.innerWidth <= 1488) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 1280 && window.innerWidth <= 1800) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(5);
      }
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div className={styles.newsWrapper}>
        <Swiper
          slidesPerView={slidesPerView}
          grid={{
            rows: 2,
          }}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className={styles.mySwiper}
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

import React, { useRef, useState, useEffect } from "react";
import NewsData from "../../Data/NewsData"
import { NewsItem } from "../sub-components/NewsItem/NewsItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import bg from "../../container/img/ezblue.jpg";
import styles from "./News.module.css";
import arrow from "../../container/img/arrow.svg";
import arrow2 from "../../container/img/arrow.svg";
// import required modules
import { Grid, Pagination } from "swiper";

export default function App() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };
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
    <div className={styles.newsWrapper}  style={{ opacity: 1, backgroundImage: `url(${bg})` }}> 
        <Swiper
        ref = {swiperRef}
          slidesPerView={slidesPerView}
          grid={{
            rows: 2,
          }}
          spaceBetween={0}
          pagination={true}
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

<div className={styles.swiperbuttonprevwrap}>
          <img
            src={arrow}
            className={styles.swiperbuttonprev}
            onClick={handlePrev}
            alt=""
          />
        </div>

        <div className={styles.swiperbuttonnextwrap}>
          <img
            src={arrow2}
            className={styles.swiperbuttonnext}
            onClick={handleNext}
            alt=""
          />
        </div>
      </Swiper>
    </div>
  );
}

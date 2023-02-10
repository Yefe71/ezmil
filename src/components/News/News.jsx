import styles from "./News.module.css";
import {React, useState, useEffect, useRef} from "react";
import bg from "../../container/img/bgdark.jpg";
import img from "../../container/img/act1.jpg";
import { NewsItem } from "../sub-components/NewsItem/NewsItem";
import { Swiper, SwiperSlide } from "swiper/react";

import arrow from "../../container/img/arrow.png";
import arrow2 from "../../container/img/arrow2.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/bundle";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import NewsData from "../../Data/NewsData"
const News = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const swiperRef = useRef(null);
  const handleNext = () => {
    swiperRef.current.swiper.slideNext()
   };
 
   const handlePrev = () => {
     swiperRef.current.swiper.slidePrev()
   };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } 

      else if (window.innerWidth <= 1077) {
        setSlidesPerView(2);
      } 
      else if (window.innerWidth <= 1279) {
        setSlidesPerView(3);
      } 

      else {
        setSlidesPerView(5);
      }
    };

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <div
      className={styles.newsParent}
      style={{ backgroundImage: `url(${bg})`,  }}
    >
      <div className={styles.headerTitle}>
        <h1>LATEST NEWS</h1>
      </div>

      <div className={styles.newsGrid}>
        {/* < NewsItem/> */}

        <Swiper
          autoplay={{ delay: 5000 }}
          ref={swiperRef}
          slidesPerView={slidesPerView}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className={styles.mySwiper}
        >

      {NewsData.map((newsItem) => {
            return (          
              <SwiperSlide className={styles.swiperSlide}>
              <NewsItem title={newsItem.title} date={newsItem.date} caption = {newsItem.caption} img = {newsItem.img}/>
          
            </SwiperSlide>
            )
          })}
    

          {/* <SwiperSlide className={styles.swiperSlide}>
            <NewsItem />
          </SwiperSlide> */}

<div className={styles.swiperbuttonprev2}>
            <img src={arrow} className={styles.swiperbuttonprev2}  onClick={handlePrev} alt="" />
          </div>

          <div className={styles.swiperbuttonnext2}>
            <img src={arrow2} className={styles.swiperbuttonnext2}   onClick={handleNext} alt="" />
          </div>
        </Swiper>

      </div>
    </div>
  );
};

export default News;

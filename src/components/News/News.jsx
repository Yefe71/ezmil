import styles from "./News.module.css";
import {React, useState, useEffect} from "react";
import bg from "../../container/img/bgduality.jpg";
import img from "../../container/img/act1.jpg";
import { NewsItem } from "../sub-components/NewsItem/NewsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const News = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
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
        setSlidesPerView(4);
      }
    };

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <div
      className={styles.newsParent}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles.headerTitle}>
        <h1>Latest News</h1>
      </div>

      <div className={styles.newsGrid}>
        {/* < NewsItem/> */}

        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <NewsItem/>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default News;

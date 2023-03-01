import React, { useRef, useState } from "react";
// Import Swiper React components
import duality from "../../../container/img/duality.jpg";
import act1 from "../../../container/img/act1.jpg";
import resonances from "../../../container/img/resonances.jpg";
import spotify from "../../../container/img/swiper-logos/spotify.png";
import youtube from "../../../container/img/swiper-logos/youtube.svg";
import apple from "../../../container/img/swiper-logos/apple.png";
import arrow from "../../../container/img/arrow.png";
import arrow2 from "../../../container/img/arrow2.png";
import AlbumsData from "../../../Data/AbumsData";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";


// import required modules
import cubeCSS from './Cube.module.css'
import { EffectCube, Pagination, Autoplay } from "swiper";
import { delay } from "framer-motion";

export default function Cube() {
  const swiperRef = useRef(null);
  const handleNext = () => {
    swiperRef.current.swiper.slideNext()
   };
 
   const handlePrev = () => {
     swiperRef.current.swiper.slidePrev()
   };
  return (
    <div className={cubeCSS.swiperWrapper}>
      <Swiper
        effect={"cube"}
        ref={swiperRef}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay = {{delay: 8000,disableOnInteraction: false}}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className={cubeCSS.swiperCubeMain}
      >

{AlbumsData.map((albumItem, index) => {
          return (
            <SwiperSlide className={cubeCSS.swiperCube}>
              <img alt="Duality album cover" src={albumItem.thumb} />
              <div className={cubeCSS.contentWrapper}>
                <div className={cubeCSS.overlayInfo1}>
                  <h2 className={cubeCSS.title}>{albumItem.title}</h2>
                  <p className={cubeCSS.date}>{albumItem.date}</p>
                  <div className={cubeCSS.descWrapper}>
                    <p className={cubeCSS.caption}>{albumItem.desc}</p>
                  </div>
                </div>
                <div className={cubeCSS.streamIcons}>
                  <a href={albumItem.appleLink}>
                    <img src={apple} className={cubeCSS.applelogo} alt="" />
                  </a>
                  <a href={albumItem.youLink}>
                    <img src={youtube} className={cubeCSS.youtubelogo} alt="" />
                  </a>
                  <a href={albumItem.spotLink}>
                    <img src={spotify} className={cubeCSS.spotifylogo} alt="" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}


        {/* <div className={cubeCSS.swiperbuttonprev3}>
          <img src={arrow}  onClick={handlePrev} alt="" />
        </div>

        <div className={cubeCSS.swiperbuttonnext3}>
          <img src={arrow2} onClick={handleNext} alt="" />
        </div> */}
      </Swiper>
    </div>
  );
}

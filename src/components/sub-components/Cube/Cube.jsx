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
        <SwiperSlide className={cubeCSS.swiperCube}>
          <img alt="Duality album cover" src={duality}/>

          <div className={cubeCSS.contentWrapper}>


          <div className={cubeCSS.overlayInfo1}>
            <h2 className = {cubeCSS.title}>DU4LI7Y</h2>
            <p className = {cubeCSS.date}>11/07/02</p>
            <p className = {cubeCSS.caption}>DU4LI7Y explains how he is as a person and his music journey which hasn't been the easiest for him. The reason his album title spelled duality with 4 & 7 was,</p>
          </div>

          <div className={cubeCSS.streamIcons}>

            <a href="https://music.apple.com/us/album/du4li7y/1634313076"><img src={apple} className = {cubeCSS.applelogo} alt="apple" /></a>
            <a href="https://www.youtube.com/watch?v=zBrbpKTycxo&list=OLAK5uy_l0l04yvdjpayOH1lkdg5d2NgptB-83pjs"><img src={youtube} className = {cubeCSS.youtubelogo} alt="youtube" /></a>
            <a href="https://open.spotify.com/album/4kAZzYkAxND103ygB4tZ3a"><img src={spotify} className = {cubeCSS.spotifylogo}alt="spotify" /></a>

          </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={cubeCSS.swiperCube}>
          <img src={act1} alt="Act 1 album cover"/>

        <div className={cubeCSS.contentWrapper}>
        <div className={cubeCSS.overlayInfo1}>
            <h2 className = {cubeCSS.title}>ACT 1</h2>
            <p className = {cubeCSS.date}>11/07/02</p>
            <p className = {cubeCSS.caption}>DU4LI7Y explains how he is as a person and his music journey which hasn't been the easiest for him. The reason his album title spelled duality with 4 & 7 was,</p>
          </div>

          <div className={cubeCSS.streamIcons}>

            <a href="https://music.apple.com/us/album/act-1/1582733812"><img src={apple} alt="apple" /></a>
            <a href="https://www.youtube.com/watch?v=kLwO2ueepZs&list=OLAK5uy_n-eeQ5uVj-FqTzNIApPTnLkTpK7o5PYUs"><img src={youtube} className = {cubeCSS.youtubelogo} alt="youtube" /></a>
            <a href="https://open.spotify.com/album/7dL6eZG0rMjmXUOwzUfarY"><img src={spotify} alt="spotify" /></a>

          </div>

        </div>

        </SwiperSlide>
        <SwiperSlide className={cubeCSS.swiperCube}>
          <img src={resonances} alt="Resonances album cover"/>

          <div className={cubeCSS.contentWrapper}>

          <div className={cubeCSS.overlayInfo1}>
              <h2 className = {cubeCSS.title}>RESONANCES</h2>
              <p className = {cubeCSS.date}>11/07/02</p>
              <p className = {cubeCSS.caption}>DU4LI7Y explains how he is as a person and his music journey which hasn't been the easiest for him. The reason his album title spelled duality with 4 & 7 was,</p>
            </div>

            <div className={cubeCSS.streamIcons}>

              <a href="https://music.apple.com/us/album/resonances/1566972776"><img src={apple} alt="apple" /></a>
              <a href="https://www.youtube.com/watch?v=oIFlt0Ha_1I&list=OLAK5uy_mES81lC6j9XK6YHaJKHTwq-V0tWM6lcb4"><img src={youtube} className = {cubeCSS.youtubelogo} alt="youtube" /></a>
              <a href="https://open.spotify.com/album/3JUIV1peZnOQlNF0cqRPvZ"><img src={spotify} alt="spotify" /></a>

            </div>
          </div>

            
    
        </SwiperSlide>
        <div className={cubeCSS.swiperbuttonprev3}>
          <img src={arrow}  onClick={handlePrev} alt="" />
        </div>

        <div className={cubeCSS.swiperbuttonnext3}>
          <img src={arrow2} onClick={handleNext} alt="" />
        </div>
      </Swiper>
    </div>
  );
}

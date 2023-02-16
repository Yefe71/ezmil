import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import duality from "../../../container/img/duality.jpg";
import act1 from "../../../container/img/act1.jpg";
import resonances from "../../../container/img/resonances.jpg";
import spotify from "../../../container/img/swiper-logos/spotify.png";
import youtube from "../../../container/img/swiper-logos/youtube.png";
import apple from "../../../container/img/swiper-logos/apple.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";


// import required modules
import cubeCSS from './Cube.module.css'
import { EffectCube, Pagination } from "swiper";

export default function Cube() {
  return (
    <div className={cubeCSS.swiperWrapper}>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
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

            <img src={apple} alt="apple" />
            <img src={youtube} alt="youtube" />
            <img src={spotify} alt="spotify" />

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

            <img src={apple} alt="apple" />
            <img src={youtube} alt="youtube" />
            <img src={spotify} alt="spotify" />

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

              <img src={apple} alt="apple" />
              <img src={youtube} alt="youtube" />
              <img src={spotify} alt="spotify" />

            </div>
          </div>

            
    
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

import React, { useRef, useState } from "react";
import bgdual from "../../container/img/bgduality.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import HeroCSS from "./Hero.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ezmil from '../../container/img/ezmil3.jpg'
import duality from '../../container/img/duality.jpg'
import dualtitle from '../../container/img/title2.svg'
import youtube from '../../container/img/logos/youtube.svg'
import spotify from '../../container/img/logos/apple.svg'
import apple from '../../container/img/logos/spotify.svg'

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { hex3 } from "@react-spring/shared";

export default function SwiperComp(props) {
  const du4li7y = "4kAZzYkAxND103ygB4tZ3a";
  const idres = "4R6HwGLuuLuXeSxitNtDnJ";
  const idact = "7dL6eZG0rMjmXUOwzUfarY";
  const titleDual = "DU4LI7Y";
  const titleRes = "RESONANCES";
  const titleAct = "ACT 1";
  const { changePage } = props;

  return (
    <div id="swiper-comp">
      <Swiper className = {HeroCSS.swiper}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
      >

        <SwiperSlide className = {HeroCSS.swiperSlide}style={{ backgroundImage: `url(${ezmil})`}}>
        <div className={HeroCSS.album}>

        <img className = {HeroCSS.dualtitle} src={dualtitle} alt="" />
        {/* <h2 className={HeroCSS.left}>ALBUM</h2> */}
        <img className = {HeroCSS.dualpic} src={duality} alt="" />
        <div className={HeroCSS.logos}>
          <img src={youtube} alt="" />
          <img src={spotify} alt="" />
          <img src={apple} alt="" />
        </div>
        <h2 className={HeroCSS.bottom}>OUT NOW</h2>

        </div>
        

        </SwiperSlide>


        
      </Swiper>
    </div>
  );
}

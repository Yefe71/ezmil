import React, { useRef, useState } from "react";
import bgact from "../../container/img/bgact1.jpg"
import bgres from "../../container/img/bgresonances.jpg"
import bgdual from "../../container/img/bgduality.jpg"
import duality from "../../container/img/duality.jpg"
import act from "../../container/img/act.jpg"
import resonances from "../../container/img/resonances.jpg"
import Album from "../sub-components/Album/Album"
import SpotifyPlayer from "../sub-components/SpotifyPlayer/SpotifyPlayer";
import AlbumInfo from "../sub-components/AlbumInfo/AlbumInfo";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./styles.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";


// import required modules
import { Pagination } from "swiper";

export default function SwiperComp() {

  const du4li7y = '4kAZzYkAxND103ygB4tZ3a'
  const idres = '4R6HwGLuuLuXeSxitNtDnJ'
  const idact = '7dL6eZG0rMjmXUOwzUfarY'

  const titleDual = 'DU4LI7Y'
  const titleRes = 'RESONANCES'
  const titleAct = 'ACT 1'

  
 
  


  return (
    <div id = "swiper-comp">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide><Album img = {duality}/><SpotifyPlayer albumid = {du4li7y}/><img className = "bg" src={bgdual} alt="" /></SwiperSlide>
        <SwiperSlide><Album img = {act}/><SpotifyPlayer albumid = {idact}/><img className = "bg" src={bgact} alt="" /></SwiperSlide>
        <SwiperSlide><Album img = {resonances}/><SpotifyPlayer albumid = {idres}/><img className = "bg" src={bgres} alt="" /></SwiperSlide> */}
        <SwiperSlide><Album className='album' img = {duality}/><SpotifyPlayer albumid = {du4li7y}/><AlbumInfo title = {titleDual}/><img className = "bg" src={bgdual} alt="" /></SwiperSlide>
        <SwiperSlide><Album className='album' img = {act}/><SpotifyPlayer albumid = {idact}/><AlbumInfo title = {titleAct}/><img className = "bg" src={bgact} alt="" /></SwiperSlide>
        <SwiperSlide><Album className='album' img = {resonances}/><SpotifyPlayer albumid = {idres}/><AlbumInfo title = {titleRes}/><img className = "bg" src={bgres} alt="" /></SwiperSlide>

      </Swiper>
    </div>
  );
}
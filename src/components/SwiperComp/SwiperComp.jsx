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
import "swiper/css/autoplay";
import "./styles.css";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function SwiperComp(props) {

  const du4li7y = '4kAZzYkAxND103ygB4tZ3a'
  const idres = '4R6HwGLuuLuXeSxitNtDnJ'
  const idact = '7dL6eZG0rMjmXUOwzUfarY'
  const titleDual = 'DU4LI7Y'
  const titleRes = 'RESONANCES'
  const titleAct = 'ACT 1'
  const { changePage } = props;
  
 
  


  return (
    
    <div id = "swiper-comp">
      <h1 className="swiper-title">ALBUMS</h1>
      <div className="button-container"><a onClick={() => changePage('discography')} class="bn13">See Discography</a></div>
      <Swiper
        loop = {true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{delay: 10000}}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
      
        <SwiperSlide><Album className='album' img = {duality}/><SpotifyPlayer albumid = {du4li7y}/><AlbumInfo title = {titleDual}/> <img className = "bg" src={bgdual} alt="" /></SwiperSlide>
        <SwiperSlide><Album className='album' img = {act}/><SpotifyPlayer albumid = {idact}/><AlbumInfo title = {titleAct}/><img className = "bg" src={bgact} alt="" /></SwiperSlide>
        <SwiperSlide><Album className='album' img = {resonances}/><SpotifyPlayer albumid = {idres}/><AlbumInfo title = {titleRes}/><img className = "bg" src={bgres} alt="" /></SwiperSlide>

      </Swiper>
    </div>
  );
}
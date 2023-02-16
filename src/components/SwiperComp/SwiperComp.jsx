import React, { useRef, useState } from "react";
import bgact from "../../container/img/bgact1.jpg";
import bgres from "../../container/img/bgresonances.jpg";
import bgdual from "../../container/img/bgduality.jpg";
import duality from "../../container/img/duality.jpg";
import act1 from "../../container/img/act1.jpg";
import resonances from "../../container/img/resonances.jpg";
import Album from "../sub-components/Album/Album";
import SpotifyPlayer from "../sub-components/SpotifyPlayer/SpotifyPlayer";
import AlbumInfo from "../sub-components/AlbumInfo/AlbumInfo";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./styles.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Cube from "../sub-components/Cube/Cube";

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
  

  
        <div className="largeContent">
          <Swiper
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{ delay: 10000 }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide
              className="slideSwiperComp"
              style={{ background: `rgba(0, 0, 0, 0)` }}
            >
              <AlbumInfo title={titleDual} img={duality} albumId={du4li7y} />
            </SwiperSlide>
            <SwiperSlide
              className="slideSwiperComp"
              style={{ background: `rgba(0, 0, 0, 0)` }}
            >
              <AlbumInfo title={titleAct} img={act1} albumId={idact} />
            </SwiperSlide>
            <SwiperSlide
              className="slideSwiperComp"
              style={{ background: `rgba(0, 0, 0, 0)` }}
            >
              <AlbumInfo title={titleRes} img={resonances} albumId={idres} />
            </SwiperSlide>
          </Swiper>
        </div>
      <div className="smallContent">
      <Cube />
      </div>
    </div>
  );
}

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
      <h1 className="swiper-title">ALBUMS AND EP</h1>
     <Link to="/discography" className = "btn-container">

     <a className="bn13">           
        See Discography
      </a>

     </Link>

 



      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 10000 }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide style={{ backgroundImage: `url(${bgdual})` }}>
        <AlbumInfo title={titleDual} img={duality} albumId = {du4li7y}/>
          {/* <Album className="album" img={duality} />
          <SpotifyPlayer albumid={du4li7y} />
          <AlbumInfo title={titleDual} />
          <img className="bg" src={bgdual} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${bgact})`}}>
        <AlbumInfo title={titleAct} img={act1} albumId = {idact}/>
          {/* <Album className="album" img={act} />
          <SpotifyPlayer albumid={idact} />
          <AlbumInfo title={titleAct} />
          <img className="bg" src={bgact} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${bgres})` }}>
        <AlbumInfo title={titleRes} img={resonances} albumId = {idres}/>
          {/* <Album className="album" img={resonances} />
          <SpotifyPlayer albumid={idres} />
          <AlbumInfo title={titleRes} />
          <img className="bg" src={bgres} alt="" /> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

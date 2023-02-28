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
import arrow from "../../container/img/arrow.png";
import arrow2 from "../../container/img/arrow2.png";
import AlbumsData from "../../Data/AbumsData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./styles.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper";
import Cube from "../sub-components/Cube/Cube";

export default function SwiperComp(props) {
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };
  return (
    <div id="swiper-comp">
      <div className="largeContent">
        <Swiper
          ref={swiperRef}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{ delay: 12000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {AlbumsData.map((albumItem, index) => {
            return (
              <SwiperSlide
                key={index}
                className="slideSwiperComp"
                style={{ background: `rgba(0, 0, 0, 0)` }}
              >
                <AlbumInfo
                  title={albumItem.title}
                  thumb={albumItem.thumb}
                  albumId={albumItem.id}
                  desc={albumItem.desc}
                  date={albumItem.date}
                  length={albumItem.length}
                  spotLink={albumItem.spotLink}
                  appleLink={albumItem.appleLink}
                />
              </SwiperSlide>
            );
          })}

          <div className="swiperbuttonprev4">
            <img
              src={arrow}
              className="swiperbuttonprev4"
              onClick={handlePrev}
              alt=""
            />
          </div>

          <div className="swiperbuttonnext4">
            <img
              src={arrow2}
              className="swiperbuttonnext4"
              onClick={handleNext}
              alt=""
            />
          </div>
        </Swiper>
      </div>
      <div className="smallContent">
        <Cube />
      </div>
    </div>
  );
}

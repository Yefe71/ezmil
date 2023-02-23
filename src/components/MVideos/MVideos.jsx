import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import mvcss from "./MVideos.module.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { MVembed2 } from "../sub-components/MVembed2/MVembed2";

import MVData from "../../Data/MusicVideosData";
import { MVembed1 } from "../sub-components/MVembed1/MVembed1";
const MVideos = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
 

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={mvcss.mySwiper2}
      >
        {MVData.map((mvItem, index) => {
          return (
            <SwiperSlide key={index} className={mvcss.swiperSlide2}>
              <MVembed2 link={mvItem.link} />
            </SwiperSlide>
          );
        })}
      </Swiper>

<div className={mvcss.mvwrapper2x}>

<div className={mvcss.mvwrapper2}>
    <Swiper
      onSwiper={setThumbsSwiper}
      spaceBetween={50}
      slidesPerView={6}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className={mvcss.mySwiper}
      
    >
      {MVData.map((mvItem, index) => {
        return (
          <SwiperSlide key={index} className={mvcss.swiperSlide2}>
            <MVembed1 link={mvItem.link} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>


</div>

    </>
  );
};

export default MVideos;

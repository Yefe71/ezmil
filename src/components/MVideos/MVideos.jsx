import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bg from "../../container/img/bgdark2.jpg";
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
  // add state to track the visibility of the Swiper component
  const [isVisible, setIsVisible] = useState(false);
  // effect to handle the fade in animation
  useEffect(() => {
    
    const handleScroll = () => {
    
      if (swiperRef.current) {
        // get the position of the Swiper component
        const { top } = swiperRef.current.getBoundingClientRect();
        // if the top of the Swiper component is within the viewport, set the visibility to true
        if (top <= window.innerHeight) {
          setIsVisible(true);
      
          
        } else {
          setIsVisible(false);
      
        }
      }
    };

    

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const swiperRef = useRef(null);
  

  const [trigger, setTrigger] = useState(0);
 



  return (
    <div className = {mvcss.mvparentwrapper}  ref={swiperRef}style={{ opacity: 1, backgroundImage: `url(${bg})`, }}>
      <div className={mvcss.titleWrapper}>
          
      </div>

      <Swiper
        ref={swiperRef} 
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        onSlideChange={() => setTrigger((trigger) => trigger + 1)}
        modules={[FreeMode, Navigation, Thumbs]}
        className={mvcss.mySwiper2}
      >
        {MVData.map((mvItem, index) => {
          return (
            <SwiperSlide key={index} className={mvcss.swiperSlide2} >
              <MVembed2 link={mvItem.link} trigger={trigger}/>
            </SwiperSlide>
          );
        })}
      </Swiper>

<div className={mvcss.mvwrapper2x}>

<div className={mvcss.mvwrapper2}>
    <Swiper
      
      onSwiper={setThumbsSwiper}
      spaceBetween={20}
      slidesPerView={6}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className={mvcss.mySwiper}
      
    >
      {MVData.map((mvItem, index) => {
        return (
          <SwiperSlide key={index} className={mvcss.swiperSlide1} >
            <MVembed1 thumb={mvItem.thumb} title = {mvItem.title}/>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>


</div>

    </div>
  );
};

export default MVideos;

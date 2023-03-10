import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bg from "../../container/img/bgact2.jpg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import mvcss from "./MVideos.module.css";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import { MVembed2 } from "../sub-components/MVembed2/MVembed2";
import MVData from "../../Data/MusicVideosData";
import { MVembed1 } from "../sub-components/MVembed1/MVembed1";
import arrow from "../../container/img/arrow.svg";
import arrow2 from "../../container/img/arrow.svg";

const TestPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [trigger, setTrigger] = useState(0);
  const swiperRef = useRef(null);
  
  
  
  // Slides per view media query
  const [swiper1Index, setSwiper1Index] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  
  const swiperRef2 = useRef(null);

  const handleNext = () => {
    swiperRef2.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef2.current.swiper.slidePrev();
  };
  useEffect(() => {
   

    const handleWindowResize = () => {
      if (window.innerWidth <= 600) {
        setSlidesPerView(2);
      } else if (window.innerWidth <= 800) {
        setSlidesPerView(3);
      } else if (window.innerWidth <= 1279) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 1280 && window.innerWidth <= 1800) {
        setSlidesPerView(5);
      } else {
        setSlidesPerView(7);
      }
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

 // Set .active css to thumb and gallery
  const checkRef = (swiper) => {
    setSwiper1Index(swiper.activeIndex)
  }


  return (
    <div
      className={mvcss.mvparentwrapper}
      ref={swiperRef}
      style={{ opacity: 1, backgroundImage: `url(${bg})` }}
    >
      <div className={mvcss.mainWrapper}>
        <Swiper
          ref={swiperRef}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={false}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          onSlideChange={(swiper) => {
            setTrigger((trigger) => trigger + 1);
            checkRef(swiper);
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={mvcss.mySwiper2}
        >
          {MVData.map((mvItem, index) => {
            return (
              <SwiperSlide key={index} className={mvcss.swiperSlide2}>
                <MVembed2 link={mvItem.link} trigger={trigger} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className={mvcss.mvwrapper2x}>
        <div className={mvcss.mvwrapper2}>
          <Swiper
            ref={swiperRef2}
            onSwiper={setThumbsSwiper}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            freeMode={true}
            pagination = {true}
            onSlideChange={(swiper) => {
  
            }}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            className={mvcss.mySwiper}
          >
            {MVData.map((mvItem, index) => {
              return (
                <SwiperSlide key={index} className={mvcss.swiperSlide1}>   
                  <MVembed1 index={index} swiperKey = {swiper1Index} thumb={mvItem.thumb} title={mvItem.title} />
                </SwiperSlide>
              );
            })}
            <div className={mvcss.swiperbuttonprevwrap}>
              <img
                src={arrow}
                className={mvcss.swiperbuttonprev}
                onClick={handlePrev}
                alt=""
              />
            </div>

            <div className={mvcss.swiperbuttonnextwrap}>
              <img
                src={arrow2}
                className={mvcss.swiperbuttonnext}
                onClick={handleNext}
                alt=""
              />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestPage;

import React, { useRef, useEffect, useState, createRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HeroCSS from "./Hero.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/bundle";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

// Import Components
import SpotifySnippet from "../sub-components/SpotifySnippet/SpotifySnippet";
import SnippetsData from "../../Data/SnippetsData";

// Import Media
import ezmil from "../../container/img/ezmil6.jpg";
import duality from "../../container/img/duality.jpg";
import dualtitle from "../../container/img/title2.svg";
import youtube from "../../container/img/logos/youtube.svg";
import spotify from "../../container/img/logos/apple.svg";
import apple from "../../container/img/logos/spotify.svg";
import mask from "../../container/img/masksolo.png";
import ezbg from "../../container/img/Photos/ezbg2.jpg";
import merchpic from "../../container/img/Photos/newdrop.jpg";
import blackhoodie from "../../container/img/Photos/Merch/blackhoodie.webp";
import longsleeve from "../../container/img/Photos/Merch/longsleeve.webp";
import pillow from "../../container/img/Photos/Merch/pillow.webp";
import redhoodie from "../../container/img/Photos/Merch/redhoodie.webp";
import shorts from "../../container/img/Photos/Merch/shorts.webp";
import tank from "../../container/img/Photos/Merch/tank.webp";
import towel from "../../container/img/Photos/Merch/towel.webp";
import tshirt from "../../container/img/Photos/Merch/tshirt.webp";
import nftdud from "../../container/img/Photos/nft/nft.png";
import illalogo from "../../container/img/Photos/nft/illa.png";
import arrow from "../../container/img/arrow.png";
import arrow2 from "../../container/img/arrow2.png";


export default function SwiperComp() {

  const videoRefs = useRef(SnippetsData.map(() => createRef()));
  
  
  useEffect(() => {
    videoRefs.current.forEach(ref => ref.current.pause());
  }, []);
  
  const swiperRef = useRef(null);
  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const checkRef = (swiper) => {
    switch (swiper.activeIndex) {
      case 0:
        videoRefs.current[0].current.pause();
        videoRefs.current[1].current.pause();
        videoRefs.current[2].current.pause();
        videoRefs.current[3].current.pause();
        videoRefs.current[4].current.pause();
        break;
      case 1:
        videoRefs.current[0].current.pause();
        videoRefs.current[1].current.pause();
        videoRefs.current[2].current.pause();
        videoRefs.current[3].current.pause();
        videoRefs.current[4].current.pause();
        break;
      case 2:
        videoRefs.current[0].current.pause();
        videoRefs.current[1].current.pause();
        videoRefs.current[2].current.pause();
        videoRefs.current[3].current.pause();
        videoRefs.current[4].current.pause();
        break;
      case 3:
        videoRefs.current[0].current.play();
        videoRefs.current[1].current.pause();
        videoRefs.current[2].current.pause();
        videoRefs.current[3].current.pause();
        videoRefs.current[4].current.pause();
        break;
      case 4:
        videoRefs.current[0].current.pause();
        videoRefs.current[1].current.play();
        videoRefs.current[2].current.pause();
        videoRefs.current[3].current.pause();
        videoRefs.current[4].current.pause();
        break;
      case 5:
        videoRefs.current[0].current.pause();
        videoRefs.current[1].current.pause();
        videoRefs.current[2].current.play();
        videoRefs.current[3].current.pause();
        videoRefs.current[4].current.pause();
        break;
      case 6:
        videoRefs.current[0].current.pause();
        videoRefs.current[1].current.pause();
        videoRefs.current[2].current.pause();
        videoRefs.current[3].current.play();
        videoRefs.current[4].current.pause();
        break;
      case 7:
        videoRefs.current[0].current.pause();
        videoRefs.current[1].current.pause();
        videoRefs.current[2].current.pause();
        videoRefs.current[3].current.pause();
        videoRefs.current[4].current.play();
        break;
      default:
        // code block
    }
  };

  return (
    <div id="swiper-comp">
      <Swiper
        ref={swiperRef}
        autoplay={{ delay: 10000 }}
        modules={[Pagination, Autoplay, Navigation]}
        onSlideChange={checkRef}
        className={HeroCSS.swiper}
        pagination={true}
      >
        {console.log(videoRefs)}
        <SwiperSlide
          className={`${HeroCSS.swiperSlide} ${HeroCSS.bgclass}`}
          style={{ backgroundImage: `url(${ezmil})` }}
        >
          <div className={HeroCSS.albumcontainer}>
            <div className={HeroCSS.mainHeader2}>
              <img className={HeroCSS.dualtitle} src={dualtitle} alt="" />

            </div>

            <div className={HeroCSS.imgWrapper}>
              <img
                onClick="https://ezmil.lnk.to/DU4LI7Y"
                rel="noreferrer"
                target="_blank"
                className={HeroCSS.dualpic2}
                src={duality}
                alt=""
              />
            </div>

            <div className={HeroCSS.logos}>
              <a
                href="https://www.youtube.com/watch?v=zBrbpKTycxo&list=OLAK5uy_l0l04yvdjpayOH1lkdg5d2NgptB-83pjs"
                rel="noreferrer"
                target="_blank"
              >
                <img className={HeroCSS.ytlogo} src={youtube} alt="" />
              </a>
              <a
                href="https://open.spotify.com/album/4kAZzYkAxND103ygB4tZ3a?referral=labelaffiliate&utm_source=1101lwwkUBku&utm_medium=Universal_Philippines&utm_campaign=labelaffiliate"
                rel="noreferrer"
                target="_blank"
              >
                <img className={HeroCSS.spotlogo} src={apple} alt="" />
              </a>
              <a
                href="https://music.apple.com/ph/album/du4li7y/1634313076?at=1000lNNy&ct=LFV_7e0c519b1ffe4f87e1c3cce1871424b1&itsct=catchall_p1&itscg=30440&ls=1"
                rel="noreferrer"
                target="_blank"
              >
                <img className={HeroCSS.applelogo} src={spotify} alt="" />
              </a>
            </div>
          </div>

          <div className={HeroCSS.mainHeader}>
            <img className={HeroCSS.dualtitle} src={dualtitle} alt="" />

            <div className={HeroCSS.outpic}>
              <h2 className={HeroCSS.bottom}>OUT NOW</h2>
              <div className={HeroCSS.dualpicphonewrapper}>
                <img
                  onClick="https://ezmil.lnk.to/DU4LI7Y"
                  rel="noreferrer"
                  target="_blank"
                  className={HeroCSS.dualpicphone}
                  src={duality}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={HeroCSS.blankSection} />

          <img className={HeroCSS.mask} src={mask} alt="" />
        </SwiperSlide>

        <SwiperSlide
          className={`${HeroCSS.swiperSlide} ${HeroCSS.slideMerch}`}
          style={{ backgroundImage: `url(${ezbg})` }}
        >
          <div className={HeroCSS.merchparent}>


            <div className={HeroCSS.shopWrapper}>
              <div className={HeroCSS.left2}>
                <div className={`${HeroCSS.item} ${HeroCSS.one}`}>
                  <div className={HeroCSS.imgTitleWrapper}>
                    <a
                      href="https://shop.virginmusic.com/collections/ez-mil/products/ez-mil-black-hoodie"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img className={HeroCSS.pic} src={blackhoodie} alt="" />
                    </a>
                    <h1 className={HeroCSS.onetitle}>Ez Mil - Black Hoodie</h1>
                  </div>
                </div>

                <div className={`${HeroCSS.item} ${HeroCSS.two}`}>
                  <div className={HeroCSS.imgTitleWrapper}>
                    <a
                      href="https://shop.virginmusic.com/collections/ez-mil/products/ez-mil-red-hoodie"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img className={HeroCSS.pic} src={redhoodie} alt="" />
                    </a>
                    <h1 className={HeroCSS.twotitle}>Ez Mil - Red Hoodie</h1>
                  </div>
                </div>

                <div className={`${HeroCSS.item} ${HeroCSS.three}`}>
                  <div className={HeroCSS.imgTitleWrapper}>
                    <a
                      href="https://shop.virginmusic.com/collections/ez-mil/products/ez-mil-towel"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        className={`${HeroCSS.pic} ${HeroCSS.towel}`}
                        src={towel}
                        alt=""
                      />
                    </a>
                    <h1 className={HeroCSS.threetitle}>Ez Mil - Towel</h1>
                  </div>
                </div>

                <div className={`${HeroCSS.item} ${HeroCSS.four}`}>
                  <div className={HeroCSS.imgTitleWrapper}>
                    <a
                      href="https://shop.virginmusic.com/collections/ez-mil/products/ez-mil-pillow"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img className={HeroCSS.pic} src={pillow} alt="" />
                    </a>
                    <h1 className={HeroCSS.fourtitle}>Ez Mil - Pillow</h1>
                  </div>
                </div>
              </div>

              <div className={HeroCSS.mid2}>
                <a
                  href="https://shop.virginmusic.com/collections/ez-mil"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img className={HeroCSS.merchpic} src={merchpic} alt="" />
                </a>
              </div>

              <div className={HeroCSS.right2}>
                <div className={HeroCSS.imgTitleWrapper}>
                  <div className={`${HeroCSS.item} ${HeroCSS.five}`}>
                    <a
                      href="https://shop.virginmusic.com/collections/ez-mil/products/ez-mil-t-shirt"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img className={`${HeroCSS.pic}`} src={tshirt} alt="" />
                    </a>
                    <h1 className={HeroCSS.fivetitle}>Ez Mil - T-Shirt</h1>
                  </div>
                </div>
                <div className={`${HeroCSS.item} ${HeroCSS.six}`}>
                  <div className={HeroCSS.imgTitleWrapper}>
                    <a
                      href="https://shop.virginmusic.com/collections/ez-mil/products/ez-mil-tank"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img className={HeroCSS.pic} src={tank} alt="" />
                    </a>
                    <h1 className={HeroCSS.sixtitle}>Ez Mil - Tank</h1>
                  </div>
                </div>
                <div className={`${HeroCSS.item} ${HeroCSS.seven}`}>
                  <div className={HeroCSS.imgTitleWrapper}>
                    <a
                      href="https://shop.virginmusic.com/collections/ez-mil/products/ez-mil-longsleeve"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img className={HeroCSS.pic} src={longsleeve} alt="" />
                    </a>
                    <h1 className={HeroCSS.seventitle}>Ez Mil - Longsleeve</h1>
                  </div>
                </div>
                <div className={`${HeroCSS.item} ${HeroCSS.eight}`}>
                  <div className={HeroCSS.imgTitleWrapper}>
                    <a
                      href="https://shop.virginmusic.com/collections/ez-mil/products/ez-mil-all-over-print-shorts"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img className={HeroCSS.pic} src={shorts} alt="" />
                    </a>
                    <h1 className={HeroCSS.eighttitle}>
                      Ez Mil - All Over Print Shorts
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className={HeroCSS.btncontainer}>
              <a
                href="https://shop.virginmusic.com/collections/ez-mil"
                rel="noreferrer"
                target="_blank"
                className={HeroCSS.buy}
              >
                BUY NOW
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className={HeroCSS.swiperSlide}
          style={{ background: "rgb(227, 204, 173)" }}
        >

          <div className={HeroCSS.illaparent}>
            <div className={HeroCSS.illawrapper}>
              <div className={HeroCSS.left3}>
                <a href="https://www.illazillaz.com/">
                  <img src={illalogo} alt="" className={HeroCSS.illalogo} />
                </a>
                <div className={HeroCSS.pwrapper}>
                  <p>
                    Slashzilla holders will receive a copy of an original story
                    board booklet from the music video of his upcoming single
                    "Rapture". Stay tuned for more announcements.
                  </p>
                </div>
              </div>

              <div className={HeroCSS.right3}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://app.niftykit.com/drops/illazillazelementz"
                >
                  <img src={nftdud} alt="" className={HeroCSS.nftdud} />
                </a>
              </div>
            </div>

            <div className={HeroCSS.btncontainermint}>
              <a
                href="https://app.niftykit.com/drops/illazillazelementz"
                rel="noreferrer"
                target="_blank"
                className={HeroCSS.mint}
              >
                MINT NOW
              </a>
            </div>
          </div>


        </SwiperSlide>


        {SnippetsData.map((mv, index) => (
        <SwiperSlide className={HeroCSS.swiperSlide}>
        <div className={HeroCSS.videoContainer}>
          <video
            className={HeroCSS.video}
            autoPlay
            loop
            muted
            playsInline
            src={mv.vid}
            ref={videoRefs.current[index]}
          />

          <div className={HeroCSS.spotframeWrapper}>

          <div className={HeroCSS.spotifyContainer}>
            <SpotifySnippet
              tracklink={mv.spot}
              className={HeroCSS.spotifySnippet}
            />
          </div>

          <div className={HeroCSS.textContainer}>
            <img className={HeroCSS.dualtitlevid} src={dualtitle} alt="" />
            <h1 className={HeroCSS.title}>{mv.title}</h1>
            <div className={HeroCSS.btns}>
              <div className={HeroCSS.btncontainerlisten}>
                <a
                  href={mv.listen}
                  rel="noreferrer"
                  target="_blank"
                  className={HeroCSS.buy}
                >
                  Listen
                </a>
              </div>
              <div className={HeroCSS.btncontainerwatch}>
                <a
                  href={mv.watch}
                  rel="noreferrer"
                  target="_blank"
                  className={HeroCSS.buy}
                >
                  Watch
                </a>
              </div>
            </div>
          </div>

          </div>
          
        </div>
      </SwiperSlide>
        ))}




        <div className={HeroCSS.swiperbuttonprev}>
          <img
            src={arrow}
            className={HeroCSS.swiperbuttonprev}
            onClick={handlePrev}
            alt=""
          />
        </div>

        <div className={HeroCSS.swiperbuttonnext}>
          <img
            src={arrow2}
            className={HeroCSS.swiperbuttonnext}
            onClick={handleNext}
            alt=""
          />
        </div>
      </Swiper>
    </div>
  );
}

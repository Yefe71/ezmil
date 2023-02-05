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
import ezmil from "../../container/img/ezmil3.jpg";
import duality from "../../container/img/duality.jpg";
import dualtitle from "../../container/img/title2.svg";
import youtube from "../../container/img/logos/youtube.svg";
import spotify from "../../container/img/logos/apple.svg";
import apple from "../../container/img/logos/spotify.svg";
import mask from "../../container/img/masksolo.png";
import ezbg from "../../container/img/Photos/ezbg2.jpg"
import merchpic from "../../container/img/Photos/newdrop.jpg"
import blackhoodie from "../../container/img/Photos/Merch/blackhoodie.webp"
import longsleeve from "../../container/img/Photos/Merch/longsleeve.webp"
import pillow from "../../container/img/Photos/Merch/pillow.webp"
import redhoodie from "../../container/img/Photos/Merch/redhoodie.webp"
import shorts from "../../container/img/Photos/Merch/shorts.webp"
import tank from "../../container/img/Photos/Merch/tank.webp"
import towel from "../../container/img/Photos/Merch/towel.webp"
import tshirt from "../../container/img/Photos/Merch/tshirt.webp"
import nftdud from "../../container/img/Photos/nft/nft.png"
import illalogo from "../../container/img/Photos/nft/illa.png"
import qr from "../../container/img/Photos/nft/qr.png"
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
      <Swiper
        autoplay={{ delay: 10000 }}
        modules={[Pagination, Autoplay, Navigation]}

        className={HeroCSS.swiper}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          dynamicBullets: true,
        }}
              >
        <SwiperSlide
          className={HeroCSS.swiperSlide}
          style={{ backgroundImage: `url(${ezmil})` }}
        >
          <img className = {HeroCSS.mask} src={mask} alt="" />
          <div className={HeroCSS.album}>
            <img className={HeroCSS.dualtitle} src={dualtitle} alt="" />
            <img className={HeroCSS.dualpic} src={duality} alt="" />
            <div className={HeroCSS.logos}>
              <a href="https://ezmil.lnk.to/DU4LI7Y" rel="noreferrer" target="_blank"><img src={youtube} alt="" /></a>
              <a href="https://ezmil.lnk.to/DU4LI7Y" rel="noreferrer" target="_blank"><img src={apple} alt="" /></a>
              <a href="https://ezmil.lnk.to/DU4LI7Y" rel="noreferrer" target="_blank"><img src={spotify} alt="" /></a>
            </div>
            <h2 className={HeroCSS.bottom}>OUT NOW</h2>
          </div>
        </SwiperSlide>
        
        <SwiperSlide
          className={HeroCSS.swiperSlide}
          style={{ backgroundImage: `url(${ezbg})` }}
        >
   

          <div className= {HeroCSS.merchparent}>
          <div className={HeroCSS.btncontainer}>
              <a  href = "https://shop.virginmusic.com/collections/ez-mil" rel="noreferrer" target="_blank" className={HeroCSS.buy}>           
                  BUY NOW
                </a>
            </div>

            <div className={HeroCSS.right2}>
            <div className={`${HeroCSS.item} ${HeroCSS.five}`}>
                <img className={HeroCSS.pic} src={blackhoodie} alt="" />
                <h1 className={HeroCSS.fivetitle}>Ez Mil - Black Hoodie</h1>
              </div>

              <div className={`${HeroCSS.item} ${HeroCSS.six}`}>
                <img className={HeroCSS.pic} src={redhoodie} alt="" />
                <h1 className={HeroCSS.sixtitle}>Ez Mil - Red Hoodie</h1>
              </div>

              <div className={`${HeroCSS.item} ${HeroCSS.seven}`}>
                <img className={HeroCSS.pic} src={towel} alt="" />
                <h1 className={HeroCSS.seventitle}>Ez Mil - Towel</h1>
              </div>

              <div className={`${HeroCSS.item} ${HeroCSS.eight}`}>
                <img className={HeroCSS.pic} src={pillow} alt="" />
                <h1 className={HeroCSS.eighttitle}>Ez Mil - Pillow</h1>
              </div>

            </div>

            <div className={HeroCSS.mid2}>
              <img className={HeroCSS.merchpic} src={merchpic} alt="" />
            </div>

            <div className={HeroCSS.left2}>
              <div className={`${HeroCSS.item} ${HeroCSS.one}`}>
                <img className={`${HeroCSS.pic}`} src={tshirt} alt="" />
                <h1 className={HeroCSS.onetitle}>Ez Mil - T-Shirt</h1>
              </div>
              <div className={`${HeroCSS.item} ${HeroCSS.two}`}>
                <img className={HeroCSS.pic} src={tank} alt="" />
                <h1 className={HeroCSS.twotitle}>Ez Mil - Tank</h1>
              </div>
              <div className={`${HeroCSS.item} ${HeroCSS.three}`}>
                <img className={HeroCSS.pic} src={longsleeve} alt="" />
                <h1 className={HeroCSS.threetitle}>Ez Mil - Longsleeve</h1>
              </div>
              <div className={`${HeroCSS.item} ${HeroCSS.four}`}>
                <img className={HeroCSS.pic} src={shorts} alt="" />
                <h1 className={HeroCSS.fourtitle}>Ez Mil - All Over Print Shorts</h1>

              </div>
            </div>




          </div>
          
        </SwiperSlide>

        <SwiperSlide
          className={HeroCSS.swiperSlide}
          style={{ background: 'rgb(227, 204, 173)' }}
        >

          <div className= {HeroCSS.illaparent}>

          <div className={HeroCSS.btncontainermint}>
            <a  href = "https://app.niftykit.com/drops/illazillazelementz" rel="noreferrer" target="_blank" className={HeroCSS.mint}>           
                MINT NOW
              </a>
          </div>

          <div className={HeroCSS.left3}>
          <img src={illalogo} alt="" className={HeroCSS.illalogo} />
          <div className={HeroCSS.pwrapper}>          
          <p>Slashzilla holders will receive a copy of an original story board booklet from the music video of his upcoming single "Rapture". Stay tuned for more announcements.</p>
</div>
          </div>


       

          <div className={HeroCSS.right3}>
            <img src={nftdud} alt="" className={HeroCSS.nftdud} />
          </div>

          </div>
          
        </SwiperSlide>


      </Swiper>
      <div className={HeroCSS.swiperbuttonprev}></div>
      <div className={HeroCSS.swiperbuttonnext}></div>
    </div>
  );
}

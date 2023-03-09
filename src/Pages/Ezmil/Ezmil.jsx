import React, { useRef, useEffect, useState } from "react";
import ezmilcss from "./ezmil.module.css";
import SideAlters from "../../components/SideAlters/SideAlters";
import { motion } from "framer-motion";
import fullpage from "fullpage.js";
import biopic from "../../container/img/thumbs/biopic.jpg";
import twotwo from "../../container/img/aboutimgs/2200.png";
import busk from "../../container/img/aboutimgs/busk.jpg";
import jab from "../../container/img/aboutimgs/jab.png";
import child from "../../container/img/aboutimgs/ezchild.png";
import fam2 from "../../container/img/aboutimgs/img.jpg";
import rebel from "../../container/img/aboutimgs/rebel.mp4";
import far from "../../container/img/aboutimgs/far.jpg";
import endimg from "../../container/img/aboutimgs/endsection.jpg";
import buskdance from "../../container/img/aboutimgs/buskdance.mp4";
import jabdance from "../../container/img/aboutimgs/jabvid.mp4";
import farawayvid from "../../container/img/aboutimgs/farawayvid.mp4";
import Aos from "aos"
import "aos/dist/aos.css"
import Footer from "../../components/Footer/Footer";
import HoverVideo from "../../components/sub-components/Videos/Videos";


export const Ezmil = () => {
  const darkRef = useRef(null);


  const reInit = () =>{
    Aos.init({duration:2000});
    console.log('run')
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      reInit()
    }, 1500);
    return () => {
      clearTimeout(timeoutId);
    };
  },[])


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.body.classList.add(ezmilcss.dark);
            document.body.classList.remove(ezmilcss.light);
          } else {
            document.body.classList.add(ezmilcss.light);
          }
        });
      },
      { threshold: 0 }
    );

    if (darkRef.current) {
      observer.observe(darkRef.current);
    }

    return () => {
      if (darkRef.current) {
        observer.unobserve(darkRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
     
      <div className={ezmilcss["background-image"]} />
    
      <div className={ezmilcss.ezmilWrapper}>
        <div className={ezmilcss.hero}>
          <div className={ezmilcss.textContainer}>
            <h1 className={ezmilcss.headerSectionTitle}>BIOGRAPHY</h1>
            <h3 className={ezmilcss.headerCaption}>
              “An artist entity that refuses to be put in a genre box, always
              willing to push the boundaries. That's Ez Mil.”
            </h3>
            <div className={ezmilcss["scroll-cue"]}>
              <div className={ezmilcss["scroll-arrow"]} />
            </div>
          </div>
        </div>

        <div className={ezmilcss.sectionsWrapper}>
          <div className={ezmilcss.section1}>
            <div data-aos = "fade-up" data-aos-delay="100" className={ezmilcss.left1}>
              <h1>
                "Hailing from the 2200; at the 27th of July, 1998, was born a
                Filipino, half Caucasian blondie boi in Olongapo City,
                Philippines.{" "}
              </h1>
            </div>
            <div data-aos = "fade-up" data-aos-delay="150" className={ezmilcss.right1}>
              <img src={twotwo} alt="" />
            </div>
          </div>
          <div className={ezmilcss.section2}>
            <div data-aos = "fade-up" data-aos-delay="150" className={ezmilcss.left2}>
              <img src={fam2} alt="" />
            </div>
            <div data-aos = "fade-up" data-aos-delay="200"className={ezmilcss.right2}>
              <h1>
                Born into parents that were tearin' it up in the nation's local
                Rock & Roll scene, that city was his place of birth and where he
                was raised.
              </h1>
            </div>
          </div>
          <div className={ezmilcss.section3}>
            <div data-aos = "fade-up" data-aos-delay="100" className={ezmilcss.left3}>
              <h1>
              As the norm of rebellion from over-exposure, instead of Rock,
                Hip-Hop or Rap was the first musical genre he fell in love
                with.
              </h1>
            </div>
            <div data-aos = "fade-up" data-aos-delay="150" className={ezmilcss.right3}>
            <HoverVideo src={rebel} className="about-video"/>
            
        
            </div>
          </div>
          <div className={ezmilcss.section4}>
            <div data-aos = "fade-up"  className={ezmilcss.left4}>
            <HoverVideo src={buskdance} className="about-video"/>
            </div>
            <div data-aos = "fade-up" className={ezmilcss.right4}>
              <h1>
                Music and dancing became the first obsession for Ez's childhood
                self-expression, with there being a point where it was only
                songs and videos as his choice of entertainment.
              </h1>
            </div>
          </div>
          <div className={ezmilcss.section5}>
            <div data-aos = "fade-up" className={ezmilcss.left5}>
              <h1>
                But from that obsession, brew his practice on the basics of
                vocal athleticism because of Chris Brown's songs{" "}
              </h1>
            </div>
            <div data-aos = "fade-up" className={ezmilcss.right5}>
            <HoverVideo src={farawayvid} className="about-video"/>
            </div>
          </div>
          <div className={ezmilcss.section6}>
            <div data-aos = "fade-up" className={ezmilcss.left6}>
            <HoverVideo src={jabdance} className="about-video"/>
            </div>
            <div data-aos = "fade-up"className={ezmilcss.right6}>
              <h1>
                And led to the love for dancing; which led him to another
                obsession for the Jabbawockeez (which he met soon after).
              </h1>
            </div>
          </div>
          <div data-aos = "fade-up" className={ezmilcss.section7}>
            <div className={ezmilcss.left7}>
              <h1>
                But as any child who grows out of certain obsession phases, Ez
                was far unlike those children. He never won't be obsessed with it for the rest of his life.
              </h1>
            </div>
            <div className={ezmilcss.right7}>
              <img src={child} alt="" />
            </div>
          </div>

          <div className={ezmilcss.section9}>
            <div className={ezmilcss.img9wrapper}>
              <div data-aos = "fade" className={ezmilcss.midTxt9}>
                <h1>
                Up to now, he just kept and will keep stacking up on things that he loves to do, and no one could and will be able to get him to just stick to one thing.”
                </h1>
              </div>
            </div>
            <div className={ezmilcss.talentWrapper}>
              <h3 data-aos = "fade" data-aos-delay="5000" className={`${ezmilcss.talent} ${ezmilcss.rapper}`}>Rapper</h3>
              <h3 data-aos = "fade" data-aos-delay="5000" className={`${ezmilcss.talent} ${ezmilcss.dancer}`}>Dancer</h3>
              <h3 data-aos = "fade" data-aos-delay="5000" className={`${ezmilcss.talent} ${ezmilcss.drummer}`}>Drummer</h3>
              <h3 data-aos = "fade" data-aos-delay="5000" className={`${ezmilcss.talent} ${ezmilcss.skater}`}>Skater</h3>
              <h3 data-aos = "fade" data-aos-delay="5000" className={`${ezmilcss.talent} ${ezmilcss.tekkenPro}`}>Tekken Pro</h3>
              <h3 className={`${ezmilcss.talent} ${ezmilcss.metalhead}`}>Metalhead</h3>
              <h3 data-aos = "fade" data-aos-delay="5000" className={`${ezmilcss.talent} ${ezmilcss.composer}`}>Composer</h3>
              <h3 ref={darkRef} data-aos = "fade" data-aos-delay="5000"className={`${ezmilcss.talent} ${ezmilcss.mixingEngineer}`}>
                Mixing Engineer
              </h3>
              <h3   data-aos = "fade" data-aos-delay="5000" className={`${ezmilcss.talent} ${ezmilcss.singer}`}>Singer</h3>
              <h3 className={`${ezmilcss.talent} ${ezmilcss.illustrator}`}>Illustrator</h3>
              <h3 data-aos = "fade" data-aos-delay="5000" className={`${ezmilcss.talent} ${ezmilcss.musicProducer}`}>
                Music Producer
              </h3>
              <h3 data-aos = "fade" data-aos-delay="5000" className={`${ezmilcss.talent} ${ezmilcss.mvProducerAndDirector}`}>
                MV Producer and Director
              </h3>
              <h3 data-aos = "fade" data-aos-delay="5000" className={`${ezmilcss.talent} ${ezmilcss.vfxArtist}`}>VFX Artist</h3>
    
              <h3 data-aos = "fade" data-aos-delay="5000" className={`${ezmilcss.talent} ${ezmilcss.beatboxer}`}>Beatboxer</h3>
              <h3 data-aos = "fade" data-aos-delay="5000" className={`${ezmilcss.talent} ${ezmilcss.poet}`}>Poet</h3>
              <h3 data-aos = "fade" data-aos-delay="5000" className={`${ezmilcss.talent} ${ezmilcss.guitarist}`}>Guitarist</h3>
              <h3 data-aos = "fade" data-aos-delay="5000"className={`${ezmilcss.talent} ${ezmilcss.pianist}`}>Pianist</h3>
              <h3 data-aos = "fade" data-aos-delay="5000" className={`${ezmilcss.talent} ${ezmilcss.voiceImpressionist}`}>
                Voice Impressionist
              </h3>
            </div>
          </div>
        </div>
      </div>
      
 
    </motion.div>
  );
};

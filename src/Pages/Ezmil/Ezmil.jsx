import React, { useEffect } from 'react';
import ezmilcss from './ezmil.module.css';
import SideAlters from '../../components/SideAlters/SideAlters';
import { motion } from 'framer-motion';
import fullpage from 'fullpage.js';
import biopic from '../../container/img/thumbs/biopic.jpg';
import twotwo from '../../container/img/aboutimgs/2200.png';
import busk from '../../container/img/aboutimgs/busk.jpg';
import jab from '../../container/img/aboutimgs/jab.png';
import child from '../../container/img/aboutimgs/child.jpg';
import fam2 from '../../container/img/aboutimgs/img.jpg';
import rebel from '../../container/img/aboutimgs/rebel2.jpg';
import far from '../../container/img/aboutimgs/far.jpg';
import buskdance from  '../../container/img/aboutimgs/buskdance.mp4';
import jabdance from  '../../container/img/aboutimgs/jabvid.mp4';
import farawayvid from  '../../container/img/aboutimgs/farawayvid.mp4';

export const Ezmil = () => {



  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  
    
  >
      <div className={ezmilcss.ezmilWrapper}> 
        <div className={ezmilcss.hero}>

          <div className={ezmilcss.textContainer}>

                <h1 className = {ezmilcss.headerSectionTitle}>
                  BIOGRAPHY
                </h1>
  
                <h3 className = {ezmilcss.headerCaption}>
                “An artist entity that refuses to be put in a genre box, always willing to push the boundaries. That's Ez Mil.”
                </h3>
            <div className={ezmilcss["scroll-cue"]}>
              <div className={ezmilcss["scroll-arrow"]}></div>
            </div>
          </div>

      


        </div>

        <div className={ezmilcss.sectionsWrapper}>
          <div className={ezmilcss.section1}>
            <div className={ezmilcss.left1}>
              <h1>Hailing from the 2200; at the 27th of July, 1998, was born a Filipino, half Caucasian blondie boi in Olongapo City, Philippines. </h1>
            </div>
            <div className={ezmilcss.right1}>
              <img src={twotwo} alt="" />
            </div>
          </div>
          <div className={ezmilcss.section2}>
            <div className={ezmilcss.left2}>
              <img src={fam2} alt="" />
            </div>
            <div className={ezmilcss.right2}>
              <h1>Born into parents that were tearin' it up in the nation's local Rock & Roll scene, that city was his place of birth and where he was raised.</h1>
            </div>
          </div>
          <div className={ezmilcss.section3}>
        
              <div className={ezmilcss.img3wrapper}>
                      <div className={ezmilcss.midImg3}>
                        <img src={rebel} alt="" />
                      </div>
                      <div className={ezmilcss.midTxt3}>
                        <h1>As the norm of rebellion from over-exposure, instead of Rock, Hip-Hop / Rap was the first musical genre he fell in love with.</h1>
                      </div>
                
              </div>
          </div>
          <div className={ezmilcss.section4}>
            <div className={ezmilcss.left4}>
            <video
               
                autoPlay
                loop
                muted
                playsInline
                src={buskdance}
              
              />
            </div>
            <div className={ezmilcss.right4}>
              <h1>Music and dancing became the first obsession for Ez's childhood self-expression, with there being a point where it was only songs and videos as his choice of entertainment. </h1>
            </div>
          </div>
          <div className={ezmilcss.section5}>
            <div className={ezmilcss.left5}>
              <h1>But from that obsession, brew his practice on the basics of vocal athleticism because of Chris Brown's songs </h1>
            </div>
            <div className={ezmilcss.right5}>
            <video
               
               autoPlay
               loop
               muted
               playsInline
               src={farawayvid}
             
             />
            </div>
          </div>
          <div className={ezmilcss.section6}>
            <div className={ezmilcss.left6}>
            <video
               
                autoPlay
                loop
                muted
                playsInline
                src={jabdance}
              
              />
            </div>
            <div className={ezmilcss.right6}>
              <h1>And led to the love for dancing; which led him to another obsession for the Jabbawockeez (which he met soon after).</h1>
            </div>
          </div>
          <div className={ezmilcss.section7}>

              <div className={ezmilcss.midTxt7}>
              <h1>But as any child who grows out of certain obsession phases, Ez was far unlike those children.</h1>
            </div>
        
              {/* <div className={ezmilcss.img7wrapper}>

                      <div className={ezmilcss.midImg7}>
                        <img src={child} alt="" />
                      </div>

              </div> */}



          </div>
          <div className={ezmilcss.section8}>
        
              <div className={ezmilcss.img8wrapper}>

                      <div className={ezmilcss.midTxt8}>
                        <h1>For anything he falls in love with and obsesses over, he never uhh.. flies?.. out of love??.. .. 'cause y'know "fall" inlo.. ANYWAY. </h1>
                      </div>

              </div>

          </div>
        </div>
      </div>

      {/* <div className={ezmilcss.ezmilWrapper}> 
        <div className={ezmilcss.hero} style={{ backgroundImage: `url(${twotwo})` }}></div>
      </div>
      <div className={ezmilcss.ezmilWrapper}> 
        <div className={ezmilcss.hero} style={{ backgroundImage: `url(${fam2})` }}></div>
      </div>
      <div className={ezmilcss.ezmilWrapper}> 
        <div className={ezmilcss.hero} style={{ backgroundImage: `url(${rebel})` }}></div>
      </div>
      <div className={ezmilcss.ezmilWrapper}> 
        <div className={ezmilcss.hero} style={{ backgroundImage: `url(${busk})` }}></div>
      </div>
      <div className={ezmilcss.ezmilWrapper}> 
        <div className={ezmilcss.hero} style={{ backgroundImage: `url(${far})` }}></div>
      </div>
      <div className={ezmilcss.ezmilWrapper}> 
        <div className={ezmilcss.hero} style={{ backgroundImage: `url(${jab})` }}></div>
      </div>
      <div className={ezmilcss.ezmilWrapper}> 
        <div className={ezmilcss.hero} style={{ backgroundImage: `url(${child})` }}></div>
      </div>
      <div className={ezmilcss.ezmilWrapper}> 
        <div className={ezmilcss.hero} style={{ backgroundImage: `url(${biopic})` }}></div>
      </div>
      <div className={ezmilcss.ezmilWrapper}> 
        <div className={ezmilcss.hero} style={{ backgroundImage: `url(${biopic})` }}></div>
      </div> */}

  </motion.div>
  );
};

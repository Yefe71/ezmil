import React, { useState,useRef,useEffect } from "react";
import ccon from './ContentContainer.module.css'
import bg from "../../container/img/bgdark2.jpg";
import News from '../News/News';
import MVideos from '../MVideos/MVideos';
import Footer from '../Footer/Footer';

const ContentContainer = () => {


  return (
    <div>
        


        <MVideos />


        
        <News/>
        <Footer/>
        
        
        
        
        
        </div>
  )
}

export default ContentContainer
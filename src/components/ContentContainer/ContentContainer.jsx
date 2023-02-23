import React from 'react'
import ccon from './ContentContainer.module.css'
import bg from "../../container/img/bgdark2.jpg";
import News from '../News/News';
import MVideos from '../MVideos/MVideos';

const ContentContainer = () => {
  return (
    <div className = {ccon.contentWrapper} style={{ backgroundImage: `url(${bg})`,  }}>
        
        <div className={ccon.titleWrapper}>
        <h1 className = {ccon.mvtitle}>MUSIC VIDEOS</h1>
          
        </div>
        
        <MVideos/>
        <News/>
        
        
        
        
        
        
        </div>
  )
}

export default ContentContainer
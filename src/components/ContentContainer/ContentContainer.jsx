import React from 'react'
import ccon from './ContentContainer.module.css'
import bg from "../../container/img/bgdark2.jpg";
import News from '../News/News';
import MVideos from '../MVideos/MVideos';

const ContentContainer = () => {
  return (
    <div className = {ccon.contentWrapper} style={{ backgroundImage: `url(${bg})`,  }}>
        
        
        
        <News/>
        
        <MVideos/>
        
        
        
        
        
        </div>
  )
}

export default ContentContainer
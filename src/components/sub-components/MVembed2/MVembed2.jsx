import React, { useState, useEffect, useRef } from "react";
import "./MVembed2.css";
import ytdark from "../../../container/img/ytlogo.svg";
import { render } from "react-dom";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
export const MVembed2 = (props) => {


  return (
    <div className = "mvparentmain">

   <LiteYouTubeEmbed 
          id={props.link}
          title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
          playerClass="customPlayButton"
        
      />

    </div>
  );
};

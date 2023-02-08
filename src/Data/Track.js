import {motion} from 'framer-motion'
import './Track.css'
import React, { useState } from "react";


function Track({track}){

    const [brightness, setBrightness] = useState(100);

    const handleMouseEnter = () => {
      setBrightness(50);
      console.log('hello')
    };

    const handleMouseLeave = () => {
      setBrightness(100);
    };



    return(
        <motion.div animate = {{opacity: 1}} initial = {{opacity: 0}} exit = {{opacity: 0}}>
            <h2 className='track-title'>{track.name}</h2>
                <div className = "albumwrapper">

                    <div className="item-and-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img className = "movie-item" src={track.img} style={{ filter: `brightness(${brightness}%)` }}alt=""/>

                        <div className= "btncontainerlisten">
                        {track.stream !== "null" && (
                            <a
                              
                                href={`${track.stream}`}
                                rel="noreferrer"
                                target="_blank"
                                className="buy"
                            >
                                Listen
                            </a>
                        )}
                        {track.lyrics !== "null" && (
                            <a
                             
                                href={`${track.lyrics}`}
                                rel="noreferrer"
                                target="_blank"
                                className="buy"
                            >
                                Lyrics
                            </a>
                        )}
                    </div>
                </div>
            </div>


            <div className = "track-info">
                <p>{track.type}</p>
                <p>{track.date}</p>
                <p>{track.genre}</p>
            </div>

        </motion.div>
    )
}

export default Track;
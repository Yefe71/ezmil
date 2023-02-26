import React, { useState, useEffect, useRef } from "react";
import styles from "./MVembed2.module.css";
import ytdark from "../../../container/img/ytlogo.svg";
export const MVembed2 = (props) => {
  const log = () => {
    console.log("call from parent");

    // Pause all iframes
    if (playerRef.current) {
      playerRef.current.contentWindow.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        "*"
      );
    } else {
      console.log("nope");
    }
  };
  useEffect(() => {
    if (props.trigger) {
      log();
    }
  }, [props.trigger]);

  const playerRef = useRef(null);

  const handlePauseClick = () => {
    console.log(playerRef)
    playerRef.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
  };

  const handlePlayerLoad = () => {
    playerRef.current = document.getElementById('youtube_player');
  };
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.15%",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* <button onClick={handlePauseClick}>PAUSE VID</button> */}

      <iframe
        id="youtube_player"
        className="yt_player_iframe"
        ref={playerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
        onLoad={handlePlayerLoad}
        loading="lazy"
        srcDoc={`<style>
                      * {
                        padding: 0;
                        margin: 0;
                        overflow: hidden;
                      }
          
                      body, html {
                        height: 100%;
                      }
          
                     .thumb {
                        position: absolute;
                        width: 100%;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                      }
          
                      svg {
                        filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
                        transition: all 250ms ease-in-out;
                      }
          
                      .logo {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 4.5rem;
                        height: 4.5rem;
                        filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
                        transition: all 150ms ease-in-out;
                      }
                      .logo:hover{
                        transform: translate(-50%, -50%) scale(1.1);
                        transform-origin: center;
                      }
                    </style>
                    <a href="http://www.youtube.com/embed/${props.link}?enablejsapi=1&version=3&playerapiid=ytplayer&autoplay=1">
                    <img class = "thumb" src='https://img.youtube.com/vi/${props.link}/hqdefault.jpg'  style={{width: '100%', height: '100%'}} />
                    <img class = "logo" src=${ytdark} />
          
                    </a>`}
        src="http://www.youtube.com/embed/${props.link}?enablejsapi=1&version=3&playerapiid=ytplayer&autoplay=1"
        allowfullscreen="true"
        allowscriptaccess="always"
        title={props.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {/* <div className={styles.mobile}>
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          loading="lazy"
          srcDoc={`<style>
              * {
                padding: 0;
                margin: 0;
                overflow: hidden;
              }
          
              body, html {
                height: 100%;
              }
          
             .thumb {
                position: absolute;
                width: 100%;
                top: 0;
                bottom: 0;
                margin: auto;
              }
          
              svg {
                filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
                transition: all 250ms ease-in-out;
              }
          
              .logo {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 2.5rem;
                height: 2.5rem;
                filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
                transition: all 150ms ease-in-out;
              }
              .logo:hover{
                transform: translate(-50%, -50%) scale(1.1);
                transform-origin: center;
              }
            </style>
            <a href='https://www.youtube.com/embed/${props.link}?autoplay=1?enablejsapi=1'>
            <img class = "thumb" src='https://img.youtube.com/vi/${props.link}/hqdefault.jpg' alt='${props.title}' style={{width: '100%', height: '100%'}} />
            <img class = "logo" src=${ytdark} alt='${props.title}' />
          
            </a>`}
          src={`https://www.youtube.com/embed/${props.link}`}
          title={props.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div> */}
    </div>
  );
};

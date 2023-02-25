import React from "react";
import styles from "./MVembed2.module.css";
import ytdark from "../../../container/img/ytlogo.svg"
export const MVembed2 = (props) => {
  return (
   
      <div style={{ position: 'relative', paddingBottom: '56.15%', height: '100%', width: '100%',overflow: 'hidden' }}>
        <div className={styles.desktop}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
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
            <a href='https://www.youtube.com/embed/${props.link}?autoplay=1'>
            <img class = "thumb" src='https://img.youtube.com/vi/${props.link}/hqdefault.jpg' alt='${props.title}' style={{width: '100%', height: '100%'}} />
            <img class = "logo" src=${ytdark} alt='${props.title}' />
          
            </a>`}
            src={`https://www.youtube.com/embed/${props.link}`}
            title={props.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className={styles.mobile}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
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
            <a href='https://www.youtube.com/embed/${props.link}?autoplay=1'>
            <img class = "thumb" src='https://img.youtube.com/vi/${props.link}/hqdefault.jpg' alt='${props.title}' style={{width: '100%', height: '100%'}} />
            <img class = "logo" src=${ytdark} alt='${props.title}' />
          
            </a>`}
            src={`https://www.youtube.com/embed/${props.link}`}
            title={props.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
   
  );
};
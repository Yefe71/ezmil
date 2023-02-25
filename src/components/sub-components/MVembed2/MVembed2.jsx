import React from "react";
import styles from "./MVembed2.module.css";
import ytdark from "../../../container/img/ytlogo.svg"
export const MVembed2 = (props) => {
  return (
   
      <div style={{ position: 'relative', paddingBottom: '56.15%', height: '100%', width: '100%',overflow: 'hidden' }}>
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
            

            .logo{
              position: absolute;
              width: 4.5rem;
              height: 4.5rem;
              top: 0;
              bottom: 0;
              right: 47%;
              margin: auto;
              transition: all 0.1s ease;
            }

            .logo:hover{
              filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
              transform: scale(1.1);
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
   
  );
};

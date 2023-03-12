import React, { useState, useEffect, useRef } from "react";
import styles from "./MVembed1.module.css";

export const MVembed1 = (props) => {
  const thumbRef = useRef(null);


  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper} ref={thumbRef}>
        <h3 className={styles.title}>{props.title}</h3>
      </div>
      <div
        
        className={`${styles.thumbContainer} ${props.swiperKey === props.index ? styles.active : ""}`}
        style={{
          backgroundImage: `url(${props.thumb})`,
          ...(props.link === "abKwhST8Qv0" && { backgroundPosition: "top" }),
        }}
        
      ></div>
    </div>
  );
};

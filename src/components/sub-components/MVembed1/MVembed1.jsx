import React, { useState, useEffect, useRef } from "react";
import styles from "./MVembed1.module.css";

export const MVembed1 = (props) => {
  const thumbRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleThumbClick = () => {
    setIsActive(true);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (thumbRef.current && !thumbRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper} ref={thumbRef} onClick={handleThumbClick}>
        <h3 className={styles.title}>{props.title}</h3>
      </div>
      <div
        
        className={`${styles.thumbContainer} ${isActive ? styles.active : ""}`}
        style={{
          backgroundImage: `url(${props.thumb})`,
          ...(props.link === "abKwhST8Qv0" && { backgroundPosition: "top" }),
        }}
        
      ></div>
    </div>
  );
};

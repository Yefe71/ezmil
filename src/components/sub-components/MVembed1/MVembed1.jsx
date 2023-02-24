import React from "react";
import styles from "./MVembed1.module.css";

export const MVembed1 = (props) => {

  return (
    <div
      className={styles.thumbContainer}
      style={{
        backgroundImage: `url(${props.thumb})`,
        ...(props.link === "abKwhST8Qv0" && { backgroundPosition: "top" }),
      }}
    >
<div className={styles.titleWrapper}>


      <h3 className = {styles.title}>{props.title}</h3>
</div>

    </div>
  );
};

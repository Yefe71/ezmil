import React from "react";
import styles from "./MVembed1.module.css";
import img from "../../../container/img/act1.jpg";

export const MVembed1 = (props) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${props.link}/${["kLwO2ueepZs", "TpJjpTyBx_g", "Ey2EK0Acn24"].includes(props.link) ? "mqdefault" : "maxresdefault"}.jpg`;

  return (
    <div
      className={styles.thumbContainer}
      style={{
        backgroundImage: `url(${thumbnailUrl})`,
        ...(props.link === "abKwhST8Qv0" && { backgroundPosition: "top" }),
      }}
    ></div>
  );
};

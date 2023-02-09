import styles from "./News.module.css";
import React from "react";
import bg from "../../container/img/bgduality.jpg";
import img from "../../container/img/act1.jpg";
import { NewsItem } from "../sub-components/NewsItem/NewsItem";
const News = () => {
  return (
    <div
      className={styles.newsParent}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles.headerTitle}>
        <h1>Latest News</h1>
      </div>

      <div className={styles.newsGrid}>

        < NewsItem/>


      </div>
    </div>
  );
};

export default News;

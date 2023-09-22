import React from "react";

import styles from "./Banner.module.scss";

import background from "../../img/banner/background.jpg";
import title from "../../img/banner/welcome.svg";
import decorate from "../../img/banner/decorate.svg";

const Banner = () => {
  return (
    <section>
      <section className={styles.root}>
        <img className={styles.title} src={title} alt="title" />
        <img className={styles.banner} src={background} alt="banner" />
        <img className={styles.decorate} src={decorate} alt="decorate" />
      </section>
    </section>
  );
};

export default Banner;

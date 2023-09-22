import React from "react";
import Banner from "../components/Banner/Banner";

import styles from "../global.module.scss";
import Benefits from "../components/Benefits/Benefits";

const Main = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Benefits />
    </div>
  );
};

export default Main;

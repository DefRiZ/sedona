import React from "react";
import Banner from "../components/Banner/Banner";

import styles from "../global.module.scss";

const Main = () => {
  return (
    <div className={styles.container}>
      <Banner />
    </div>
  );
};

export default Main;

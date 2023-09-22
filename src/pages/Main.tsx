import React from "react";
import Banner from "../components/Banner/Banner";

import styles from "../global.module.scss";
import Benefits from "../components/Benefits/Benefits";
import Search from "../components/Search/Search";
import Subscribe from "../components/Subscribe/Subscribe";

const Main = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Benefits />
      <Search />
      <Subscribe />
    </div>
  );
};

export default Main;

import React from "react";

import styles from "./Filter.module.scss";

import home from "../../img/sort/home-page.svg";
import arrow from "../../img/sort/arrow.svg";

import SortApartment from "../SortApartment/SortApartment";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h1>Гостиницы Седоны</h1>
        <div className={styles.breadcrumbs}>
          <Link to="/">
            <img src={home} alt="home-page" />
          </Link>
          <img src={arrow} alt="arrow" />
          <span>Гостиницы</span>
        </div>
        <form>
          <SortApartment />
        </form>
      </div>
    </section>
  );
};

export default Filter;
import React from "react";

import { Link } from "react-router-dom";

import styles from "./Search.module.scss";
import global from "../../global.module.scss";

const Search = () => {
  return (
    <article className={styles.root}>
      <h2 className={global.title}>Заинтересовались?</h2>
      <p className={global.subtitle}>
        Укажите предполагаемые даты поездки, <br /> и мы покажем вам лучшие
        предложения гостиниц в Седоне
      </p>
      <div className={styles.btnWrap}>
        <Link className={`${global.btn} ${styles.btn}`} to="/hotels">
          ПОИСК ГОСТИНИЦЫ В СЕДОНЕ
        </Link>
      </div>
    </article>
  );
};

export default Search;

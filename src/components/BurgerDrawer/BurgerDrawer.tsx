import React from "react";

import styles from "./BurgerDrawer.module.scss";
import { Link } from "react-router-dom";

import favorites from "../../img/header/heart.svg";
import { useGetFavoritesQuery } from "../../redux/favoritesApi";

const BurgerDrawer = () => {
  const { data = [] } = useGetFavoritesQuery(null);

  return (
    <article className={styles.container}>
      <div className={styles.root}>
        <ul className={styles.navigation}>
          <li>
            <Link className={styles.link} to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/">
              О Седоне
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/hotels">
              Гостиницы
            </Link>
          </li>
          <li>
            <Link to="/hotels" className={styles.fav}>
              <img src={favorites} alt="favorites places" />
              <span>{data.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default BurgerDrawer;

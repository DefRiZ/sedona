import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import global from "../../global.module.scss";

import logo from "../../img/header/logo.svg";
import search from "../../img/header/search.svg";
import favorites from "../../img/header/heart.svg";
import { useGetFavoritesQuery } from "../../redux/favoritesApi";
import FavoritesItems from "../FavoritesItems/FavoritesItems";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data = [] } = useGetFavoritesQuery(null);
  return (
    <header>
      <div className={styles.container}>
        <nav>
          <ul>
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
          </ul>
        </nav>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logotype" />
          </Link>
        </div>
        <div className={styles.secondNav}>
          <Link className={styles.search} to="/">
            <img src={search} alt="searching" />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className={styles.fav}>
            <img src={favorites} alt="favorites places" />
            <span>{data.length}</span>
          </button>
          {isOpen && <FavoritesItems />}
          <Link className={`${styles.btn}, ${global.btn}`} to="/hotels">
            Хочу сюда!
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

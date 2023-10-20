import React from "react";

import styles from "./Header.module.scss";

import logo from "../../img/header/logo.svg";
import search from "../../img/header/search.svg";
import favorites from "../../img/header/heart.svg";

import FavoritesItems from "../FavoritesItems/FavoritesItems";
import BurgerDrawer from "../BurgerDrawer/BurgerDrawer";

import { useGetFavoritesQuery } from "../../redux/favoritesApi";
import { RootState, useAppDispatch } from "../../redux/store";
import { setIsOpenBurger } from "../../redux/slices/filterSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useAppDispatch();
  const { isOpenBurger } = useSelector((state: RootState) => state.filter);
  const [isOpen, setIsOpen] = React.useState(false);
  const { data = [] } = useGetFavoritesQuery(null);
  const favoriteRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        favoriteRef.current &&
        !event.composedPath().includes(favoriteRef.current)
      ) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
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
          <button
            ref={favoriteRef}
            onClick={() => setIsOpen(!isOpen)}
            className={styles.fav}
          >
            <img src={favorites} alt="favorites places" />
            <span>{data.length}</span>
          </button>
          {isOpen && <FavoritesItems />}
          <Link className={styles.btn} to="/hotels">
            Хочу сюда!
          </Link>
          <div
            onClick={() => dispatch(setIsOpenBurger())}
            className={styles.burger}
          >
            <span></span>
          </div>
        </div>
        {isOpenBurger && <BurgerDrawer />}
      </div>
    </header>
  );
};

export default Header;

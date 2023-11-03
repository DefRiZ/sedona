import styles from "./BurgerDrawer.module.scss";

import favorites from "../../img/header/heart.svg";

import { Link } from "react-router-dom";
import { setIsOpenBurger } from "../../redux/slices/filterSlice";
import { useGetFavoritesQuery } from "../../redux/favoritesApi";
import { useAppDispatch } from "../../redux/store";

const BurgerDrawer = () => {
  const dispatch = useAppDispatch();
  const { data = [] } = useGetFavoritesQuery(null);

  return (
    <article className={styles.container}>
      <div className={styles.root}>
        <ul className={styles.navigation}>
          <li>
            <Link
              onClick={() => dispatch(setIsOpenBurger())}
              className={styles.link}
              to="/"
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              onClick={() => dispatch(setIsOpenBurger())}
              className={styles.link}
              to="/"
            >
              О Седоне
            </Link>
          </li>
          <li>
            <Link
              onClick={() => dispatch(setIsOpenBurger())}
              className={styles.link}
              to="/hotels"
            >
              Гостиницы
            </Link>
          </li>
          <li>
            <Link
              onClick={() => dispatch(setIsOpenBurger())}
              to="/hotels"
              className={styles.fav}
            >
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

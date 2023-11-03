import styles from "./Filter.module.scss";

import home from "../../img/sort/home-page.svg";
import arrow from "../../img/sort/arrow.svg";

import SortApartment from "../SortApartment/SortApartment";
import RangeSlider from "../RangeSlider/RangeSlider";

import { useAppDispatch } from "../../redux/store";
import { setByDefault } from "../../redux/slices/filterSlice";

import { Link } from "react-router-dom";

const Filter = () => {
  const dispatch = useAppDispatch();
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h1>Готелі Седони</h1>
        <div className={styles.breadcrumbs}>
          <Link to="/">
            <img src={home} alt="home-page" />
          </Link>
          <img src={arrow} alt="arrow" />
          <span>Готелі</span>
        </div>
        <div className={styles.filtration}>
          <SortApartment />
          <RangeSlider />
          <button
            onClick={() => dispatch(setByDefault())}
            className={styles.resetBtn}
          >
            Скинути налаштування
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;

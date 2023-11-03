import styles from "./Search.module.scss";
import global from "../../global.module.scss";

import { Link } from "react-router-dom";

const Search = () => {
  return (
    <article className={styles.root}>
      <h2 className={global.title}>Зацікавилися?</h2>
      <p className={global.subtitle}>
        Вкажіть передбачувані дати поїздки, <br /> і ми покажемо вам найкращі
        пропозиції готелів у Седоні
      </p>
      <div className={styles.btnWrap}>
        <Link className={styles.btn} to="/hotels">
          ПОШУК ГОТЕЛЯ В СЕДОНІ
        </Link>
      </div>
    </article>
  );
};

export default Search;

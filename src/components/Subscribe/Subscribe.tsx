import React from "react";

import styles from "./Subscribe.module.scss";
import global from "../../global.module.scss";

const Subscribe = () => {
  return (
    <article className={styles.root}>
      <h2 className={`${global.title} ${styles.title}`}>
        Подпишитесь на рассылку
      </h2>
      <p className={`${global.subtitle} ${styles.subtitle}`}>
        Только полезная информация и никакого спама, честное бойскаутское!
      </p>
      <form>
        <input className={styles.input} type="email" placeholder="Ваш e-mail" />
        <input className={styles.btn} type="submit" value="Подписаться" />
      </form>
    </article>
  );
};

export default Subscribe;

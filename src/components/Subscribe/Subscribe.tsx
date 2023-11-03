import styles from "./Subscribe.module.scss";
import global from "../../global.module.scss";

const Subscribe = () => {
  return (
    <article className={styles.root}>
      <h2 className={`${global.title} ${styles.title}`}>
        Підпишіться на розсилку
      </h2>
      <p className={`${global.subtitle} ${styles.subtitle}`}>
        Тільки корисна інформація та ніякого спаму, чесне бойскаутське!
      </p>
      <form>
        <input className={styles.input} type="email" placeholder="Ваш e-mail" />
        <input className={styles.btn} type="submit" value="Підписатися" />
      </form>
    </article>
  );
};

export default Subscribe;

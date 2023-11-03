import styles from "./Footer.module.scss";

import twit from "../../img/footer/twitter.svg";
import fb from "../../img/footer/facebook.svg";
import yb from "../../img/footer/youtube.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.social}>
          <Link className={styles.link} to="/">
            <img src={twit} alt="twitter link" />
          </Link>
          <Link className={styles.link} to="/">
            <img src={fb} alt="facebook link" />
          </Link>
          <Link className={styles.link} to="/">
            <img src={yb} alt="youtube link" />
          </Link>
        </div>
        <div>
          <span className={styles.number}>
            <a href="tel:+3800000000">+(380) 000-00-00</a>
          </span>
        </div>
        <div className={styles.copyright}>
          <h2>&copy;Andrew</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

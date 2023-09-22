import React from "react";

import styles from "./Benefits.module.scss";
import global from "../../global.module.scss";

import firstImg from "../../img/benefits/first.jpg";
import secondImg from "../../img/benefits/second.jpg";
import house from "../../img/benefits/house.svg";
import food from "../../img/benefits/food.svg";
import gifts from "../../img/benefits/gifts.svg";

const Benefits = () => {
  return (
    <section className={styles.root}>
      <div className={styles.titleSection}>
        <h2 className={`${styles.title} ${global.title}`}>
          Седона — небольшой городок в Аризоне, <br /> заслуживающий большего!
        </h2>
        <p className={`${styles.subtitle} ${global.subtitle}`}>
          Рассмотрим 5 причин, по которым Седона круче, чем Гранд-Каньон!
        </p>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.benefit}>
          <h3>
            Настоящий <br /> городок
          </h3>
          <span>— №1 —</span>
          <p>
            Седона — не аттракцион <br /> для туристов, там течёт <br /> своя
            жизнь
          </p>
        </div>
        <img src={firstImg} alt="banner" />
        <div className={styles.house}>
          <img src={house} alt="apartment" />
          <h3>Жильё</h3>
          <p>
            Рекомендуем пожить <br /> в настоящем мотеле, <br /> всё как в кино!
          </p>
        </div>
        <div className={styles.food}>
          <img src={food} alt="food" />
          <h3>Еда</h3>
          <p>
            Всегда заказывайте <br /> топовый фирменный бургер, <br /> вы не
            разочаруетесь!
          </p>
        </div>
        <div className={styles.gifts}>
          <img src={gifts} alt="souvenirs" />
          <h3>Сувениры</h3>
          <p>
            Не только китайского, <br /> но и настоящего местного <br />{" "}
            производства!
          </p>
        </div>
        <img src={secondImg} alt="banner" />
        <div className={styles.benefit}>
          <h3>
            Там есть <br /> мост дьявола
          </h3>
          <span>— №2 —</span>
          <p>
            Да, по нему можно пройти! <br /> Если вы осмелитесь, <br />{" "}
            разумеется
          </p>
        </div>
        <div className={styles.benefit}>
          <h3>
            Небольшая <br /> площадь
          </h3>
          <span>— №3 —</span>
          <p>
            Все достопримечательности <br /> находятся очень близко
          </p>
        </div>
        <div className={styles.benefit}>
          <h3>
            Красивая <br /> дорога
          </h3>
          <span>— №4 —</span>
          <p>
            Ехать в Седону из Лас-Вегаса <br /> совсем не скучно!
          </p>
        </div>
        <div className={styles.benefit}>
          <h3>
            Мало <br /> туристов
          </h3>
          <span>— №5 —</span>
          <p>
            Большинство едет в Гранд <br /> Каньон и толпится там
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

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
          Седона - невелике містечко в Арізоні, <br /> варте більшого!
        </h2>
        <p className={`${styles.subtitle} ${global.subtitle}`}>
          Розглянемо 5 причин, з яких Седона крутіше, ніж Гранд-Каньйон!
        </p>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.benefit}>
          <h3>
            Справжнє <br /> містечко
          </h3>
          <span>— №1 —</span>
          <p>
            Седона – не атракціон <br /> для туристів, там тече <br /> своє
            життя
          </p>
        </div>
        <img className={styles.img} src={firstImg} alt="banner" />
        <div className={styles.house}>
          <img src={house} alt="apartment" />
          <h3>Житло</h3>
          <p>
            Рекомендуємо пожити <br /> в справжньому мотелі, <br /> все як у
            кіно!
          </p>
        </div>
        <div className={styles.food}>
          <img src={food} alt="food" />
          <h3>Їжа</h3>
          <p>
            Завжди замовляйте <br /> топовий фірмовий бургер, <br /> ви не
            розчаруєтесь!
          </p>
        </div>
        <div className={styles.gifts}>
          <img src={gifts} alt="souvenirs" />
          <h3>Сувеніри</h3>
          <p>
            Не тільки китайського, <br /> але і справжнього місцевого <br />
            виробництва!
          </p>
        </div>
        <img className={styles.img} src={secondImg} alt="banner" />
        <div className={styles.benefit}>
          <h3>
            Там є <br /> міст диявола
          </h3>
          <span>— №2 —</span>
          <p>
            Так, ним можна пройти! <br /> Якщо ви наважитеся, <br />
            зрозуміло
          </p>
        </div>
        <div className={styles.benefit}>
          <h3>
            Невелика <br /> площадь
          </h3>
          <span>— №3 —</span>
          <p>
            Усі пам'ятки <br /> знаходяться дуже близько
          </p>
        </div>
        <div className={styles.benefit}>
          <h3>
            Красива <br /> дорога
          </h3>
          <span>— №4 —</span>
          <p>
            Їхати до Седони з Лас-Вегаса <br /> зовсім не нудно!
          </p>
        </div>
        <div className={styles.benefit}>
          <h3>
            Мало <br /> туристів
          </h3>
          <span>— №5 —</span>
          <p>
            Більшість їде в Гранд <br /> Каньйон і товпиться там
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

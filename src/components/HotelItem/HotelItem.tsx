import React from "react";

import styles from "./HotelItem.module.scss";
import global from "../../global.module.scss";

import star from "../../img/singlePage/Vector.svg";

import { elementApi } from "../../redux/hotelsApi";
import {
  useAddToFavoriteMutation,
  useDeleteFromFavoriteMutation,
} from "../../redux/favoritesApi";

import { Link } from "react-router-dom";

const HotelItem: React.FC<elementApi> = ({
  id,
  name,
  type,
  price,
  rate,
  image,
}) => {
  //
  const one = (
    <div className={styles.image}>
      <img src={star} alt="star" />
    </div>
  );
  const two = (
    <div className={styles.image}>
      <img src={star} alt="star" />
      <img src={star} alt="star" />
    </div>
  );
  const three = (
    <div className={styles.image}>
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
    </div>
  );
  const four = (
    <div className={styles.image}>
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
    </div>
  );
  const five = (
    <div className={styles.image}>
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
    </div>
  );
  //
  const [addToFavorite] = useAddToFavoriteMutation();
  const [deleteFromFavorite] = useDeleteFromFavoriteMutation();
  const [isFavorite, setIsFavorite] = React.useState(false);
  const onClickAdd = async () => {
    await addToFavorite({
      id,
      name,
      type,
      price,
      rate,
      image,
    }).unwrap();
    setIsFavorite(true);
  };
  const onClickRemove = async (id: number) => {
    await deleteFromFavorite(id).unwrap();
    setIsFavorite(false);
  };
  return (
    <div className={styles.root}>
      <div className={styles.about}>
        <img className={styles.image} src={image} alt="hotel" />
        <div className={styles.info}>
          <h2>{name}</h2>
          <div className={styles.about}>
            <span>{type}</span>
            <span>От {price} грн.</span>
          </div>
          <div className={styles.buttons}>
            <Link className={`${global.btn} ${styles.btn}`} to="/">
              ПОДРОБНЕЕ
            </Link>
            {!isFavorite && (
              <button
                onClick={() => onClickAdd()}
                className={`${global.btn} ${styles.btnFav}`}
              >
                В ИЗБРАННОЕ
              </button>
            )}
            {isFavorite && (
              <button
                onClick={() => onClickRemove(id)}
                className={` ${global.btn} ${styles.btnFavAdded} `}
              >
                В ИЗБРАННОМ
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={styles.rating}>
        {(rate >= 9 && five) ||
          (rate >= 7 && four) ||
          (rate >= 5 && three) ||
          (rate >= 3 && two) ||
          (rate >= 0 && one)}
        <span>Рейтинг: {rate}</span>
      </div>
    </div>
  );
};

export default HotelItem;

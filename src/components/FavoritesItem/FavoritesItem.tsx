import React from "react";
import styles from "./FavoritesItem.module.scss";
import remove from "../../img/favorites/delete.svg";

import { elementApi } from "../../redux/hotelsApi";
import { useDeleteFromFavoriteMutation } from "../../redux/favoritesApi";

const FavoritesItem: React.FC<elementApi> = ({
  id,
  name,
  type,
  price,
  rate,
  image,
}) => {
  const [deleteFromFavorite] = useDeleteFromFavoriteMutation();
  const onClickDelete = async (id: number) => {
    await deleteFromFavorite(id).unwrap();
  };
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <img className={styles.photo} src={image} alt="hotel" />
        <div className={styles.about}>
          <span className={styles.name}>{name}</span>
          <span className={styles.type}>{type}</span>
        </div>
      </div>
      <button onClick={() => onClickDelete(id)} className={styles.remove}>
        <img src={remove} alt="wth" />
      </button>
    </div>
  );
};

export default FavoritesItem;

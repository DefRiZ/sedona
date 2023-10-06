import React from "react";

import styles from "./FavoritesItems.module.scss";

import { useGetFavoritesQuery } from "../../redux/hotelsApi";
import FavoritesItem from "../FavoritesItem/FavoritesItem";

const FavoritesItems = () => {
  const { data = [] } = useGetFavoritesQuery(null);

  return (
    <article>
      <div className={styles.root}>
        {data.map((item) => (
          <FavoritesItem key={item.id} {...item} />
        ))}
      </div>
    </article>
  );
};

export default FavoritesItems;

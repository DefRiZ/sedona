import styles from "./FavoritesItems.module.scss";

import FavoritesItem from "../FavoritesItem/FavoritesItem";

import { useGetFavoritesQuery } from "../../redux/favoritesApi";

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

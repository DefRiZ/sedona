import React from "react";
import { elementApi, useGetHotelsQuery } from "../../redux/hotelsApi";
import HotelItem from "../../components/HotelItem/HotelItem";

import styles from "./Hotels.module.scss";
import global from "../../global.module.scss";
import Sort from "../../components/Sort/Sort";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Hotels = () => {
  const { sort } = useSelector((state: RootState) => state.filter);
  const { data = [], isLoading } = useGetHotelsQuery(sort.sort);
  if (isLoading) <h1>Loading</h1>;
  return (
    <section className={styles.root}>
      <div className={global.container}>
        <div className={styles.sort}>
          <h3>Найдено гостиниц: {data.length}</h3>
          <Sort />
        </div>
        <ul className={styles.list}>
          {data.map((item: elementApi) => (
            <HotelItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hotels;

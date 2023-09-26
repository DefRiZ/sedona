import React from "react";
import { elementApi, useGetHotelsQuery } from "../../redux/hotelsApi";
import HotelItem from "../../components/HotelItem/HotelItem";

import styles from "./Hotels.module.scss";
import global from "../../global.module.scss";

const Hotels = () => {
  const { data = [], isLoading } = useGetHotelsQuery("");
  if (isLoading) <h1>Loading</h1>;
  return (
    <section className={styles.root}>
      <div className={global.container}>
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

import React from "react";
import { elementApi, useGetHotelsQuery } from "../../redux/hotelsApi";
import HotelItem from "../../components/HotelItem/HotelItem";

import styles from "./Hotels.module.scss";
import global from "../../global.module.scss";
import Sort from "../../components/Sort/Sort";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Filter from "../../components/Filter/Filter";
import PaginationBlock from "../../components/PaginationBlock/PaginationBlock";

const Hotels = () => {
  const { sort, apartmenType, range, currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.filter
  );
  const sortType = sort.sort;
  const { data = [], isLoading } = useGetHotelsQuery({
    sortType,
    apartmenType,
    range,
    currentPage,
    itemsPerPage,
  });
  console.log(data);
  if (isLoading) <h1>Loading</h1>;
  return (
    <section className={styles.root}>
      <div className={global.container}>
        <Filter />
        <div className={styles.sort}>
          <h3>Найдено гостиниц: {data.length}</h3>
          <Sort />
        </div>
        <div className={styles.hotelsList}>
          <ul className={styles.list}>
            {data.map((item: elementApi) => (
              <HotelItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
        <div className={styles.paginationBlock}>
          <PaginationBlock />
        </div>
      </div>
    </section>
  );
};

export default Hotels;

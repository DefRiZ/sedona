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
import ItemsQty from "../../components/ItemsQty/ItemsQty";
import Subscribe from "../../components/Subscribe/Subscribe";

const Hotels = () => {
  const { sort, apartmenType, range, currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.filter
  );
  const sortType = sort.sort;
  const {
    data = [],

    isError,
  } = useGetHotelsQuery({
    sortType,
    apartmenType,
    range,
    currentPage,
    itemsPerPage,
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hotelsList = data.map((item: elementApi) => (
    <HotelItem key={item.id} {...item} />
  ));

  return (
    <section className={styles.root}>
      <div className={global.container}>
        <Filter />
        <div className={styles.sort}>
          <h3>Найдено готелів: {data.length}</h3>
          <Sort />
        </div>
        <div className={styles.hotelsList}>
          <ul className={styles.list}>
            {isError && (
              <h1 className={styles.error}>
                Ця демоверсія не підтримує json-server. Запустіть проект з
                гіт-хабу за допомогою команди "npm run dev", щоб побачити список
                готелів.
              </h1>
            )}
            {data && hotelsList}
          </ul>
        </div>
        <div className={styles.paginationBlock}>
          <PaginationBlock />
          <ItemsQty />
        </div>
        <Subscribe />
      </div>
    </section>
  );
};

export default Hotels;

import React from "react";

import styles from "./SortApartment.module.scss";

import { useAppDispatch } from "../../redux/store";
import { setApartmenType } from "../../redux/slices/filterSlice";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";

const apartments = ["Готель", "Мотель", "Апартаменти"];

const SortApartment = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchParams: URLSearchParamsInit = { type: e.target.value };
    setSearchParams(newSearchParams);
    dispatch(setApartmenType(e.target.value));
  };
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Тип житла:</h2>
      <div className={styles.radio}>
        {apartments.map((apartment, i) => (
          <label key={i}>
            <input
              className={styles.input}
              onChange={(e) => onChangeType(e)}
              key={i}
              value={apartment}
              name="typeApart"
              type="radio"
            />
            <span className={styles.fake}></span>
            <span className={styles.text}>{apartment}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SortApartment;

import React from "react";
import { useAppDispatch } from "../../redux/store";
import { setApartmenType } from "../../redux/slices/filterSlice";

import styles from "./SortApartment.module.scss";

const apartments = ["Гостиница", "Мотель", "Апартаменты"];

const SortApartment = () => {
  const dispatch = useAppDispatch();
  const onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setApartmenType(e.target.value));
  };
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Тип жилья:</h2>
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

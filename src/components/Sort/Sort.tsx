import React from "react";

import styles from "./Sort.module.scss";

import vector from "../../img/sort/Vector.svg";

import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";

import { setSortType } from "../../redux/slices/filterSlice";

const list = [
  { name: "Сначала дешевые", sort: "price&_order=asc" },
  { name: "Сначала дорогие", sort: "price&_order=desc" },
  { name: "За рейтингом", sort: "rate&_order=desc" },
];

const Sort = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { sort } = useSelector((state: RootState) => state.filter);
  const changeSortType = (object: { name: string; sort: string }) => {
    dispatch(setSortType(object));
  };
  return (
    <div className={styles.sort}>
      <div onClick={() => setOpen(!open)} className={styles.label}>
        <span>{sort.name}</span>
        <img src={vector} alt="arrow" />
      </div>
      {open && (
        <div className={styles.popup}>
          <ul>
            {list.map((item, index) => (
              <li
                onClick={() => changeSortType(item)}
                className={
                  item.sort === sort.sort
                    ? `${styles.active}`
                    : `${styles.item}`
                }
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

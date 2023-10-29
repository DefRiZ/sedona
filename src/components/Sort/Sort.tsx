import React from "react";

import styles from "./Sort.module.scss";

import vector from "../../img/sort/Vector.svg";

import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { setSortType } from "../../redux/slices/filterSlice";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";

const list = [
  { name: "Сначала дешевые", sort: "price&_order=asc" },
  { name: "Сначала дорогие", sort: "price&_order=desc" },
  { name: "За рейтингом", sort: "rate&_order=desc" },
];

const Sort = () => {
  const [open, setOpen] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const { sort } = useSelector((state: RootState) => state.filter);

  const changeSortType = (object: { name: string; sort: string }) => {
    const newSearchParams: URLSearchParamsInit = { parametr: object.sort };
    setSearchParams(newSearchParams);
    dispatch(setSortType(object));
    setOpen(false);
  };

  const sortRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <div className={styles.sort}>
      <div
        ref={sortRef}
        onClick={() => setOpen(!open)}
        className={styles.label}
      >
        <span>{sort.name}</span>
        <img src={vector} alt="arrow" />
      </div>
      {open && (
        <div className={styles.popup}>
          <ul>
            {list.map((item, index) => (
              <li
                key={index}
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

import React from "react";

import styles from "./ItemsQty.module.scss";

import arrow from "../../img/sort/Vector.svg";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { setitemsPerPage } from "../../redux/slices/filterSlice";

const itemsQty = [3, 4, 5, 6];

const ItemsQty = () => {
  const dispatch = useAppDispatch();
  const { itemsPerPage } = useSelector((state: RootState) => state.filter);
  const [isOpen, setIsOpen] = React.useState(false);
  const onClickChangeQty = (item: number) => {
    dispatch(setitemsPerPage(item));
    setIsOpen(false);
  };
  const qtyRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (qtyRef.current && !event.composedPath().includes(qtyRef.current)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <div className={styles.root}>
      <div className={styles.selected}>
        <h3 className={styles.title}>Готелів на сторінці:</h3>
        <div
          ref={qtyRef}
          onClick={() => setIsOpen(!isOpen)}
          className={styles.label}
        >
          <span className={styles.chosen}>{itemsPerPage}</span>
          <img className={styles.img} src={arrow} alt="selected" />
        </div>
      </div>
      {isOpen && (
        <div className={styles.popup}>
          <ul>
            {itemsQty.map((item, index) => (
              <li
                onClick={() => onClickChangeQty(item)}
                className={styles.item}
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItemsQty;

import Slider from "rc-slider";
import "./RangeSlider.scss";
import styles from "./RangeSlider.module.scss";

import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { setRange } from "../../redux/slices/filterSlice";

const RangeSlider = () => {
  const dispatch = useAppDispatch();
  const { range } = useSelector((state: RootState) => state.filter);
  const handleSliderChange = (number: [number, number]) => {
    dispatch(setRange(number));
  };
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Стоимость, грн.</h3>
      <div className={styles.priceRangeBlock}>
        <div className={styles.priceRange}>
          <span className={styles.price}>{range[0]}</span>
          <span className={styles.priceText}>от</span>
        </div>
        <div className={styles.priceRange}>
          <span className={styles.price}>{range[1]}</span>
          <span className={styles.priceText}>до</span>
        </div>
      </div>
      <Slider
        range
        value={range}
        min={0}
        max={9000}
        step={1}
        //@ts-ignore
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default RangeSlider;

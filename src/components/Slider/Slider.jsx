import { useState, memo } from "react";
import moment from "moment";

import styles from "./Slider.module.scss";

const Slider = ({ currentDate, onClick }) => {
  const handleDecrement = () => {
    onClick(-1);
  };

  const handleIncrement = () => {
    onClick(1);
  };

  return (
    <div className={styles.Slider}>
      <button
        type="button"
        onClick={handleDecrement}
        className={styles.arrowBtn}
      >
        &#60;
      </button>
      <p className={styles.date}>{moment(currentDate).format("MMMM YYYY")}</p>
      <button
        type="button"
        onClick={handleIncrement}
        className={styles.arrowBtn}
      >
        &#62;
      </button>
    </div>
  );
};

export default memo(Slider);

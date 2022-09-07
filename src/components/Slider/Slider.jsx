import { useState } from "react";
import moment from "moment";

import DatePicker from "../DatePicker";

import styles from "./Slider.module.scss";

const Slider = ({ currentDate, onClick }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleDecrement = () => {
    onClick(-1);

    setIsFilterOpen(false);
  };

  const handleIncrement = () => {
    onClick(1);

    setIsFilterOpen(false);
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
      <p
        className={styles.date}
        onClick={() => setIsFilterOpen((prevState) => !prevState)}
      >
        {moment(currentDate).format("MMMM YYYY")}
      </p>
      <button
        type="button"
        onClick={handleIncrement}
        className={styles.arrowBtn}
      >
        &#62;
      </button>
      <DatePicker
        isOpen={isFilterOpen}
        toggleFilter={setIsFilterOpen}
        date={currentDate}
      />
    </div>
  );
};

export default Slider;

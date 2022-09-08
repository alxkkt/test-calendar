import { useState, useEffect, memo, useCallback } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import DatePicker from "../DatePicker";
import useFilter from "../../shared/hooks/useFilter";

import styles from "./Slider.module.scss";

const Slider = ({ currentDate, onMonthChange, handleDatePick }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filter = useFilter();
  console.log("currentDate: ", currentDate);
  console.log("filter: ", filter);

  const handleMonthChange = useCallback(
    (value) => {
      onMonthChange(value);

      setIsFilterOpen(false);
    },
    [onMonthChange]
  );

  return (
    <div className={styles.Slider}>
      <button
        type="button"
        onClick={() => handleMonthChange(-1)}
        className={styles.arrowBtn}
        data-type="decrement"
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
        onClick={() => handleMonthChange(1)}
        className={styles.arrowBtn}
        data-type="increment"
      >
        &#62;
      </button>
      <DatePicker
        isOpen={isFilterOpen}
        toggleFilter={setIsFilterOpen}
        date={currentDate}
        handleDatePick={handleDatePick}
      />
    </div>
  );
};

export default memo(Slider);

Slider.propTypes = {
  currentDate: PropTypes.any.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  handleDatePick: PropTypes.func.isRequired,
};

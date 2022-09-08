import { useEffect, useState } from "react";
import moment from "moment";
import { nanoid } from "nanoid";

import styles from "./DatePicker.module.scss";

import monthsList from "../../shared/data/monthsList.json";

const DatePicker = ({ isOpen, toggleFilter, date, handleDatePick }) => {
  const [filterDate, setFilterDate] = useState(date);
  const currentYear = date.getFullYear();

  const handleMonthClick = (month) => {
    const year = filterDate.getFullYear();
    handleDatePick(year, month);

    toggleFilter(!isOpen);
  };

  const handleYearChange = (value) => {
    const newDate = new Date(
      filterDate.getFullYear() + value,
      filterDate.getMonth()
    );

    setFilterDate(newDate);
  };

  const onYearIncrease = () => {
    handleYearChange(1);
  };

  const onYearDecrease = () => {
    handleYearChange(-1);
  };

  const items = monthsList.map(({ id, value }) => (
    <li
      key={id}
      className={
        Number(id) === filterDate.getMonth() &&
        currentYear === filterDate.getFullYear()
          ? `${styles.item} ${styles.current}`
          : `${styles.item}`
      }
    >
      <p className={styles.month} onClick={() => handleMonthClick(id)}>
        {value.slice(0, 3)}
      </p>
    </li>
  ));
  return (
    <div
      className={
        isOpen
          ? `${styles.DatePicker}`
          : `${styles.DatePicker} ${styles.hidden}`
      }
    >
      <h2 className={styles.sign}>Choose a date</h2>
      <div className={styles.yearPicker}>
        <button
          type="button"
          onClick={onYearDecrease}
          className={styles.arrowBtn}
        >
          &#60;
        </button>
        <p className={styles.year}>{moment(filterDate).format("YYYY")}</p>
        <button
          type="button"
          onClick={onYearIncrease}
          className={styles.arrowBtn}
        >
          &#62;
        </button>
      </div>
      <ul className={styles.list}>{items}</ul>
    </div>
  );
};

export default DatePicker;

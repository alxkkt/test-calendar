import { useEffect } from "react";
import moment from "moment";
import { nanoid } from "nanoid";

import styles from "./DatePicker.module.scss";

import monthsList from "../../shared/data/monthsList";

const DatePicker = ({ isOpen, toggleFilter, date }) => {
  const handleClick = () => {
    toggleFilter(!isOpen);
  };

  const items = monthsList.map((item) => (
    <li key={nanoid()} className={styles.item}>
      <p className={styles.month}>{item.slice(0, 3)}</p>
    </li>
  ));
  return (
    <div
      className={
        isOpen ? `${styles.Filter}` : `${styles.Filter} ${styles.hidden}`
      }
      data-component="filter"
      onClick={handleClick}
    >
      I am date-picker
      <p>{moment(date).format("YYYY")}</p>
      <ul className={styles.list}>{items}</ul>
    </div>
  );
};

export default DatePicker;

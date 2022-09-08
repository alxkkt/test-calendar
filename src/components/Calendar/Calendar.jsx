import { useMemo } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import moment from "moment";

import Cell from "./Cell";
import getFullMonth from "../../shared/functions/getFullMonth";

import styles from "./Calendar.module.scss";

const Calendar = ({ currentDate, monthDates }) => {
  const fullMonth = useMemo(() => getFullMonth(monthDates), [monthDates]);

  const elements = fullMonth.map((item) => {
    const [day] = item.toString().split(" ");

    const isToday =
      moment(item).format("D/MM/YYYY") ===
      moment(Date.now()).format("D/MM/YYYY");

    const isCurrentMonth = item.getMonth() === currentDate.getMonth();

    return (
      <Cell
        key={nanoid()}
        isCurrentMonth={isCurrentMonth}
        isToday={isToday}
        day={day}
        cellDate={item}
      />
    );
  });

  return (
    <table className={styles.table}>
      <caption className={styles.caption}>Calendar</caption>
      <tbody className={styles.tableBody}>
        <tr className={styles.row}>{elements.slice(0, 7)}</tr>
        <tr className={styles.row}>{elements.slice(7, 14)}</tr>
        <tr className={styles.row}>{elements.slice(14, 21)}</tr>
        <tr className={styles.row}>{elements.slice(21, 28)}</tr>
        <tr className={styles.row}>{elements.slice(28, 35)}</tr>
        <tr className={styles.row}>{elements.slice(35, 42)}</tr>
      </tbody>
    </table>
  );
};

export default Calendar;

Calendar.propTypes = {
  currentDate: PropTypes.any.isRequired,
  monthDates: PropTypes.arrayOf(PropTypes.any.isRequired),
};

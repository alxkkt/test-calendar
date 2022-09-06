import { nanoid } from "nanoid";
import moment from "moment";

import styles from "./Calendar.module.scss";
import getFullMonth from "../../shared/functions/getFullMonth";

const Calendar = ({ currentDate, monthDates }) => {
  const fullMonth = getFullMonth(monthDates);

  console.log(fullMonth);

  const elements = fullMonth.map((item) => {
    const [day] = item.toString().split(" ");
    const date = item.getDate();

    const isToday =
      moment(item).format("D/MM/YYYY") ===
      moment(Date.now()).format("D/MM/YYYY");

    const isCurrentMonth = item.getMonth() === currentDate.getMonth();

    return (
      <td
        key={nanoid()}
        className={
          isToday ? `${styles.cell} ${styles.active}` : `${styles.cell}`
        }
        data-month={isCurrentMonth ? "current" : "different"}
      >
        <div className={styles.cellInner}>
          <p className={styles.day}>{day.slice(0, 2)}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </td>
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

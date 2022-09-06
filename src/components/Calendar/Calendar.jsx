import { useState } from "react";
import moment from "moment/moment";

import styles from "./Calendar.module.scss";

const Calendar = () => {
  const [date, setDate] = useState(Date.now());

  const now = moment();
  console.log(now.format("dddd").slice(0, 2));
  return (
    <table className={styles.table}>
      <caption>Calender</caption>
      <thead>
        <tr>
          <th>Mo</th>
          <th>Tu</th>
          <th>We</th>
          <th>Th</th>
          <th>Fr</th>
          <th>Sa</th>
          <th>Su</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.row}>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
          <td className={styles.cell}>day</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Calendar;

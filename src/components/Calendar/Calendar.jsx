import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import moment from 'moment';

import Cell from './Cell';
import getFullMonth from '../../shared/functions/getFullMonth';
import getAllDaysInMonth from 'shared/functions/getAllDaysInMonth';

import styles from './Calendar.module.scss';

const Calendar = ({ currentDate }) => {
  const currentMonthDates = getAllDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const fullMonth = useMemo(
    () => getFullMonth(currentMonthDates),
    [currentMonthDates]
  );

  const elements = fullMonth.map(item => {
    const isToday =
      moment(item).format('D/MM/YYYY') ===
      moment(new Date()).format('D/MM/YYYY');

    const isCurrentMonth = item.getMonth() === currentDate.getMonth();

    return (
      <Cell
        key={item.toString()}
        isCurrentMonth={isCurrentMonth}
        isToday={isToday}
        cellDate={item}
      />
    );
  });

  return (
    <section className={styles.table}>
      <h2 className={styles.caption}>Calendar</h2>
      <div className={styles.calendar}>{elements}</div>
    </section>
  );
};

export default Calendar;

Calendar.propTypes = {
  currentDate: PropTypes.any.isRequired,
};

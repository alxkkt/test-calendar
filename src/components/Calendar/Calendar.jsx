import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import moment from 'moment';

import Cell from './Cell';
import getFullMonth from '../../shared/functions/getFullMonth';

import styles from './Calendar.module.scss';

const Calendar = ({ currentDate, monthDates }) => {
  const fullMonth = useMemo(() => getFullMonth(monthDates), [monthDates]);

  const elements = fullMonth.map(item => {
    const [day] = item.toString().split(' ');

    const isToday =
      moment(item).format('D/MM/YYYY') ===
      moment(Date.now()).format('D/MM/YYYY');

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
    <section className={styles.table}>
      <h2 className={styles.caption}>Calendar</h2>
      <div className={styles.calendar}>{elements}</div>
    </section>
  );
};

export default Calendar;

Calendar.propTypes = {
  currentDate: PropTypes.any.isRequired,
  monthDates: PropTypes.arrayOf(PropTypes.any.isRequired),
};

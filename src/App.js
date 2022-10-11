import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import Calendar from './components/Calendar';
import NewEventButton from './components/NewEventButton';
import Slider from './components/Slider';
import BackButton from './shared/components/BackButton';

import getAllDaysInMonth from './shared/functions/getAllDaysInMonth';
import { setFilter } from './redux/events/events-operations';
import useFilter from './shared/hooks/useFilter';

function App() {
  const [date, setDate] = useState(new Date());
  const currentMonthDates = getAllDaysInMonth(
    date.getFullYear(),
    date.getMonth()
  );
  const dispatch = useDispatch();
  const filter = useFilter();

  useEffect(() => {
    if (!filter) {
      return;
    }

    setDate(new Date(filter));
  }, [filter]);

  const handleMonthChange = value => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + value);

    setDate(newDate);

    const action = setFilter(newDate);
    dispatch(action);
  };

  const handleDatePick = (year, month) => {
    const newDate = new Date(year, month);

    setDate(newDate);

    const action = setFilter(newDate);
    dispatch(action);
  };

  const isToday =
    moment(new Date()).format('MM YYYY') ===
    moment(new Date(filter)).format('MM YYYY');

  return (
    // 1. панель управления --
    // 1а. кнопка добавления события и открытия модалки
    // 1б. управление фильтром даты
    // 2. календарь
    <div className="container">
      <NewEventButton />
      {!isToday && (
        <BackButton sign={'today'} handleDatePick={handleDatePick} />
      )}
      <Slider
        currentDate={date}
        onMonthChange={handleMonthChange}
        handleDatePick={handleDatePick}
      />
      <Calendar currentDate={date} monthDates={currentMonthDates} />
    </div>
  );
}

export default App;

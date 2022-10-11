import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Calendar from './components/Calendar';
import AppBar from './components/AppBar';

import { setFilter } from './redux/events/events-operations';
import useFilter from './shared/hooks/useFilter';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();
  const filter = useFilter();

  useEffect(() => {
    if (!filter) {
      return;
    }

    setSelectedDate(new Date(filter));
  }, [filter]);

  const handleMonthChange = value => {
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + value
    );

    setSelectedDate(newDate);

    const action = setFilter(newDate);
    dispatch(action);
  };

  const handleDatePick = (year, month) => {
    const newDate = new Date(year, month);

    setSelectedDate(newDate);

    const action = setFilter(newDate);
    dispatch(action);
  };

  return (
    // 1. панель управления --
    // 1а. кнопка добавления события и открытия модалки ✅
    // 1б. управление фильтром даты
    // 2. календарь
    // 2a. открытие модалки для изменения события --> функция обработчик
    <div className="container">
      <AppBar />
      {/* <NewEventButton />
      {!isToday && (
        <BackButton sign={'today'} handleDatePick={handleDatePick} />
      )}
      <Slider
        currentDate={date}
        onMonthChange={handleMonthChange}
        handleDatePick={handleDatePick}
      /> */}
      <Calendar currentDate={selectedDate} />
    </div>
  );
}

export default App;

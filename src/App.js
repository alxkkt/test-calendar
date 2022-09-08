import { useState } from "react";
import { useDispatch } from "react-redux";

import Calendar from "./components/Calendar";
import NewEventButton from "./components/NewEventButton";
import Slider from "./components/Slider";

import getAllDaysInMonth from "./shared/functions/getAllDaysInMonth";
import { actions } from "./redux/events/events-slice";

import "./App.scss";

function App() {
  const [date, setDate] = useState(new Date());
  const currentMonthDates = getAllDaysInMonth(
    date.getFullYear(),
    date.getMonth()
  );
  const dispatch = useDispatch();

  const handleMonthChange = (value) => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + value);

    setDate(newDate);

    // const action = actions.setFilter(newDate);
    // dispatch(action);
  };

  const handleDatePick = (year, month) => {
    const newDate = new Date(year, month);

    setDate(newDate);
  };

  return (
    <div className="container">
      <NewEventButton />
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

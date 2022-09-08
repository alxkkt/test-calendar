import { useState } from "react";

import "./App.scss";

import Calendar from "./components/Calendar";
import NewEventButton from "./components/NewEventButton";
import Slider from "./components/Slider";

import getAllDaysInMonth from "./shared/functions/getAllDaysInMonth";

function App() {
  const [date, setDate] = useState(new Date());
  const currentMonthDates = getAllDaysInMonth(
    date.getFullYear(),
    date.getMonth()
  );

  const handleMonthChange = (value) => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + value);

    setDate(newDate);
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

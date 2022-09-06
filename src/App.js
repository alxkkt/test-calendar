import { useState } from "react";
// import moment from "moment";

import "./App.scss";

import Calendar from "./components/Calendar";
import Button from "./components/Button";
import Slider from "./components/Slider";

import getAllDaysInMonth from "./shared/functions/getAllDaysInMonth";

function App() {
  const [date, setDate] = useState(new Date());

  const dates = getAllDaysInMonth(date.getFullYear(), date.getMonth());

  const handleMonthChange = (value) => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + value);

    setDate(newDate);
  };

  return (
    <div className="container">
      <Button />
      <Slider currentDate={date} onClick={handleMonthChange} />
      <Calendar currentDate={date} monthDates={dates} />
    </div>
  );
}

export default App;

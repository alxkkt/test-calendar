import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import Calendar from "./components/Calendar";
import NewEventButton from "./components/NewEventButton";
import Slider from "./components/Slider";
import BackButton from "./shared/components/BackButton";

import getAllDaysInMonth from "./shared/functions/getAllDaysInMonth";
import { actions } from "./redux/events/events-slice";
import useFilter from "./shared/hooks/useFilter";

import "./App.scss";

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
      console.log("this is first render ever");
      return;
    }

    setDate(new Date(filter));
  }, [filter]);

  const handleMonthChange = (value) => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + value);

    setDate(newDate);

    const action = actions.setFilter(newDate);
    dispatch(action);
  };

  const handleDatePick = (year, month) => {
    const newDate = new Date(year, month);

    setDate(newDate);

    const action = actions.setFilter(newDate);
    dispatch(action);
  };

  const isToday =
    moment(new Date()).format("MM YYYY") ===
    moment(new Date(filter)).format("MM YYYY");
  console.log(moment(new Date()).format("MM YYYY"));
  console.log(moment(new Date(filter)).format(" MM YYYY"));
  console.log(isToday);

  return (
    <div className="container">
      <NewEventButton />
      {!isToday && (
        <BackButton sign={"today"} handleDatePick={handleDatePick} />
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

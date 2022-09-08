import { shallowEqual, useSelector } from "react-redux";
import moment from "moment";

import { getEvents } from "../../redux/events/events-selectors";

const useEventsByDate = (date) => {
  const events = useSelector(getEvents, shallowEqual);
  const searchedDate = moment(date).format("D/MM/YYYY");

  const todayEvents = events.filter(
    ({ date }) => moment(date).format("D/MM/YYYY") === searchedDate
  );

  return todayEvents;
};

export default useEventsByDate;

import { shallowEqual, useSelector } from "react-redux";

import { getFilter } from "../../redux/events/events-selectors";

const useFilter = () => {
  const filter = useSelector(getFilter, shallowEqual);

  return filter;
};

export default useFilter;

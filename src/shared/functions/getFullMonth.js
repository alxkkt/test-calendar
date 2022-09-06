import getAllDaysInMonth from "./getAllDaysInMonth";

export default function getFullMonth(array, value) {
  const dayOfWeek = array[0].getDay();
  let currentYear = array[0].getFullYear();
  let currentMonth = array[0].getMonth();

  const prevMonthDates = getAllDaysInMonth(currentYear, currentMonth - 1);
  const nextMonthDates = getAllDaysInMonth(currentYear, currentMonth + 1);

  let missingQuantity = 42 - array.length;

  switch (dayOfWeek) {
    case 1: // Monday
      return [...array, ...nextMonthDates.splice(0, missingQuantity)];
    case 2: // Tuesday
      return [
        prevMonthDates[prevMonthDates.length - 1],
        ...array,
        ...nextMonthDates.splice(0, missingQuantity - 1),
      ];
    case 3: // Wednesday
      return [
        ...prevMonthDates.splice(
          prevMonthDates.length - 2,
          prevMonthDates.length
        ),
        ...array,
        ...nextMonthDates.splice(0, missingQuantity - 2),
      ];
    case 4: // Thursday
      return [
        ...prevMonthDates.splice(
          prevMonthDates.length - 3,
          prevMonthDates.length
        ),
        ...array,
        ...nextMonthDates.splice(0, missingQuantity - 3),
      ];
    case 5: // Friday
      return [
        ...prevMonthDates.splice(
          prevMonthDates.length - 4,
          prevMonthDates.length
        ),
        ...array,
        ...nextMonthDates.splice(0, missingQuantity - 4),
      ];
    case 6: // Saturday
      return [
        ...prevMonthDates.splice(
          prevMonthDates.length - 5,
          prevMonthDates.length
        ),
        ...array,
        ...nextMonthDates.splice(0, missingQuantity - 5),
      ];
    case 0: // Sunday
      return [
        ...prevMonthDates.splice(
          prevMonthDates.length - 6,
          prevMonthDates.length
        ),
        ...array,
        nextMonthDates[0],
      ];
    default:
      return array;
  }
}

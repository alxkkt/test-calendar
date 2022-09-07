export default function getAllDaysInMonth(year, month) {
  let date = null;

  if (month === 12) {
    date = new Date(year + 1, 0, 1);
  } else if (month === -1) {
    date = new Date(year, 11, 1);
  } else {
    date = new Date(year, month, 1);
  }

  const dates = [];

  while (date.getMonth() === month) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

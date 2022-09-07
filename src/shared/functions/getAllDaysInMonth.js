export default function getAllDaysInMonth(year, month) {
  let date = null;
  const dates = [];

  if (month === 12) {
    date = new Date(year + 1, 0, 1);

    while (date.getMonth() === 0) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  } else if (month === -1) {
    date = new Date(year - 1, 11, 1);

    while (date.getMonth() === 11) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  } else {
    date = new Date(year, month, 1);
  }

  while (date.getMonth() === month) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

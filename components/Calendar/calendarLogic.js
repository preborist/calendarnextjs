const DAYS_IN_WEEK = 7;

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const Month = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

export function areEqual(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isLeapYear(year) {
  return !(year % 4 || (!(year % 100) && year % 400));
}

export function getDaysInMonth(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  let daysInMonth = DAYS_IN_MONTH[month];

  if (isLeapYear(year && month === Month.February)) {
    return daysInMonth + 1;
  } else {
    return daysInMonth;
  }
}

export function getMonthData(year, month) {
  const result = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const monthStartsOn = date.getDay();
  let day = 1;
  let prevMonthDays = new Date((year, month, day) - monthStartsOn);

  for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
    result[i] = [];

    for (let j = 0; j < DAYS_IN_WEEK; j++) {
      if (i === 0 && j < monthStartsOn) {
        result[i][j] = {
          date: new Date(year, month, prevMonthDays++),
          className: 'day prevMonth',
        };
      } else if (day < daysInMonth) {
        // console.log(day);
        result[i][j] = {
          date: new Date(year, month, day++),
          className: 'day currentMonth',
        };
      } else {
        result[i][j] = {
          date: new Date(year, month, day++),
          className: 'day nextMonth',
        };
      }
    }
  }
  return result;
}

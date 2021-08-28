import { useState } from 'react';
import classNames from 'classnames';

import * as calendarLogic from './calendarLogic';

export default function Calendar() {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  function generate_year_range(start, end) {
    const years = [];
    for (let year = start; year <= end; year++) {
      years.push(year);
    }
    return years;
  }

  const currentMonth = currentDay.getMonth();
  const currentYear = currentDay.getFullYear();
  const yearsRange = generate_year_range(2021, 2050);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthData = calendarLogic.getMonthData(currentYear, currentMonth);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handlePrevMonthButtonClick = () => {
    const date = new Date(currentDay.getFullYear(), currentDay.getMonth() - 1);
    setCurrentDay(date);
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(currentDay.getFullYear(), currentDay.getMonth() + 1);
    setCurrentDay(date);
  };

  const handleSelectedDayClick = date => {
    setSelectedDate(date);
  };

  return (
    <>
      <div>
        <h3>Calendar</h3>

        <div>
          <button onClick={handlePrevMonthButtonClick}>&#8249;</button>
          <p>
            {months[currentMonth]} {currentYear}
          </p>
          <button onClick={handleNextMonthButtonClick}>&#8250;</button>
        </div>

        <table>
          <tbody>
            {monthData.map((week, index) => (
              <tr key={index}>
                {week.map((date, index) =>
                  date ? (
                    <td
                      onClick={() => handleSelectedDayClick(date)}
                      key={index}
                      className={classNames('day', {
                        today: calendarLogic.areEqual(date, currentDay),
                      })}
                    >
                      {date.getDate()}
                    </td>
                  ) : (
                    <td key={index}></td>
                  ),
                )}
              </tr>
            ))}
            <tr>
              {days.map(day => (
                <th key={day}>{day.slice(0, 1)}</th>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

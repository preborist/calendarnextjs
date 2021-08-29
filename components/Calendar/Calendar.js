import { useState } from 'react';
import classNames from 'classnames';

import * as calendarLogic from './calendarLogic';

import s from './Calendar.module.scss';

export default function Calendar() {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [today, setToday] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const currentMonth = currentDay.getMonth();
  const currentYear = currentDay.getFullYear();

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
                {week.map(({ date, className }, index) =>
                  date ? (
                    <td
                      onClick={() => handleSelectedDayClick(date)}
                      key={index}
                      className={classNames(className, {
                        today: calendarLogic.areEqual(date, today),
                        selected: calendarLogic.areEqual(date, selectedDate),
                      })}
                    >
                      {date.getDate()}
                    </td>
                  ) : (
                    <td key={index} className={className}></td>
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
      <style jsx>
        {`
          .day {
            padding: 5px;
          }
          .day.today {
            color: green;
          }
          .day.selected {
            color: red;
          }
        `}
      </style>
    </>
  );
}

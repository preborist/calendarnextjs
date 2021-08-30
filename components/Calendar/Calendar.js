import { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import classNames from 'classnames';

import * as actions from '../../redux/actions';

import * as calendarLogic from './calendarLogic';
import Modal from '../Modal';

import s from './Calendar.module.scss';

function Calendar({ onChoseDate, isSelectedDate }) {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [today, setToday] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);

  function toggle() {
    setIsShowModal(!isShowModal);
  }

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
    setIsShowModal(true);
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
                      onClick={() => {
                        onChoseDate(date);
                        handleSelectedDayClick(date);
                      }}
                      // onClick={() => {
                      //   handleSelectedDayClick(date);
                      // }}
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
        <Modal
          selectedDate={selectedDate}
          isShowModal={isShowModal}
          hide={toggle}
        />
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

const mapStateToProps = state => {
  return {
    value: state.isSelectedDate,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChoseDate: value => dispatch(actions.choseDate(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

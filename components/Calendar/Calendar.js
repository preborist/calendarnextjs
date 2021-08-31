import { useState } from 'react';
import { connect } from 'react-redux';

import classNames from 'classnames';

import * as actions from '../../redux/actions';

import * as calendarLogic from './calendarLogic';
import Modal from '../Modal';

import s from './Calendar.module.scss';

function Calendar({ onChoseDate }) {
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
      <div className={s.calendar__wrapper}>
        <h3 hidden>Calendar</h3>
        <div className={s.calendar__nav}>
          <button className={s.nav__btn} onClick={handlePrevMonthButtonClick}>
            &#8249;
          </button>
          <p className={s.nav__title}>
            {months[currentMonth]} {currentYear}
          </p>
          <button className={s.nav__btn} onClick={handleNextMonthButtonClick}>
            &#8250;
          </button>
        </div>
        <table className={s.table}>
          <tbody className={s.tbody}>
            {monthData.map((week, index) => (
              <tr className={s.tr} key={index}>
                {week.map(({ date, className }, index) =>
                  date ? (
                    <td
                      onClick={() => {
                        onChoseDate(date);
                        handleSelectedDayClick(date);
                      }}
                      key={index}
                      className={classNames(className, {
                        today: calendarLogic.areEqual(date, today),
                        selected: calendarLogic.areEqual(date, selectedDate),
                      })}
                    >
                      {('0' + date.getDate()).slice(-2)}
                    </td>
                  ) : (
                    <td key={index} className={className}></td>
                  ),
                )}
              </tr>
            ))}
            <tr className={s.days__wrapper}>
              {days.map(day => (
                <th className={s.days} key={day}>
                  {day.slice(0, 1)}
                </th>
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
            padding: 25px;
            cursor: pointer;
            font-size: 16px;
            color: #dfdfdf;
          }

          .day.today {
            position: relative;
            color: #3d3d3d;
            background-color: #fdd000;
          }

          .day.selected {
            position: relative;
            display: flex;
            color: #fdd000;
          }
          .day.selected::after {
            content: '';
            position: absolute;
            left: 33px;
            bottom: 15px;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: #fdd000;
          }

          .day.nextMonth,
          .day.prevMonth {
            opacity: 0.24;
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

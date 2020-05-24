import React, { useState } from 'react';
import './Calendar.css';
import WeekDays from './WeekDays';
import Week from './Week';
import {
  createCalendarDaysArr,
  updatedCalendarDaysArray,
  createWeeksArray
} from '../utilityFunctions';

//Inputs:
const daysInMonth = 31;
const firstDOW = 'SAT';
const currentDayOfMonth = 23;
const inputCalendarDaysArray = createCalendarDaysArr(daysInMonth);

const updatedDaysArray = updatedCalendarDaysArray(
  firstDOW,
  inputCalendarDaysArray
);
const weeksArray = createWeeksArray(updatedDaysArray);

const Calendar = () => {
  const [activeDay, setActiveDay] = useState(currentDayOfMonth);

  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.innerText >= currentDayOfMonth) {
      setActiveDay(event.target.innerText);
    }
  };
  return (
    <div className="Calendar">
      <WeekDays />
      <div className="HorizontalLine" />
      {weeksArray.map((week, idx) => {
        return (
          <div key={idx}>
            <Week
              week={week}
              handleClick={handleClick}
              currentDayOfMonth={currentDayOfMonth}
              activeDay={activeDay}
            />
            <div className="HorizontalLine" />
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;

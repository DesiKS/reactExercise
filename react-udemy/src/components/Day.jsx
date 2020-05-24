import React from 'react';
import './Calendar.css';

const Day = ({ dayValue, handleClick, currentDayOfMonth, activeDay }) => {
  let dayStyle = 'Day';
  if (!dayValue) {
    dayStyle = 'Day-Invalid';
  } else if (dayValue < currentDayOfMonth) {
    dayStyle = 'Day-HasPassed ';
  } else if (dayValue === parseInt(activeDay)) {
    dayStyle = 'Day-Active';
  }

  return (
    <div
      className={dayStyle}
      onClick={dayValue >= currentDayOfMonth ? handleClick : null}
    >
      {dayValue}
    </div>
  );
};

export default Day;

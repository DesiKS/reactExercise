import React from 'react';
import './Calendar.css';

const Day = (props) => {
  const { dayValue, handleClick, currentDayOfMonth, activeDay } = props;

  let dayStyle = 'Day';
  if (dayValue < 1) {
    dayStyle = 'Day-Invalid';
  } else if (dayValue > 0 && dayValue < currentDayOfMonth) {
    dayStyle = 'Day-HasPassed ';
  } else if (dayValue === parseInt(activeDay)) {
    dayStyle = 'Day-Active';
  }

  return (
    <div className={dayStyle} onClick={handleClick}>
      {dayValue}
    </div>
  );
};

export default Day;

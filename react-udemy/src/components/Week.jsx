import React from 'react';
import Day from './Day';
import './Calendar.css';

const Week = (props) => {
  const { week, handleClick, currentDayOfMonth, activeDay } = props;

  return (
    <div className="Week">
      {week.map((day, idx) => (
        <Day
          dayValue={day}
          key={idx}
          handleClick={handleClick}
          currentDayOfMonth={currentDayOfMonth}
          activeDay={activeDay}
        />
      ))}
    </div>
  );
};

export default Week;

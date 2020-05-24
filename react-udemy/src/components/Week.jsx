import React from 'react';
import Day from './Day';
import './Calendar.css';

const Week = ({ week, handleClick, currentDayOfMonth, activeDay }) => {
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

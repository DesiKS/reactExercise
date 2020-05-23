import React from 'react';
import './Calendar.css';

const weekDayArray = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];

const WeekDays = () => {
  return (
    <div className="DOW">
      {weekDayArray.map((DOW, idx) => (
        <div key={idx}>{DOW}</div>
      ))}
    </div>
  );
};

export default WeekDays;

import React, { Component } from 'react';
import './Calendar.css';
import WeekDays from './WeekDays';
import Week from './Week';
import {
  createCalendarDaysArr,
  updatedCalendarDaysArray,
  createWeeksArray
} from './utilityFunctions';

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

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      activeDay: currentDayOfMonth
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (event.target.innerText >= currentDayOfMonth) {
      this.setState({ activeDay: event.target.innerText });
    }
  }

  render() {
    return (
      <div className="Calendar">
        <WeekDays />
        {weeksArray.map((week, idx) => {
          return (
            <Week
              key={idx}
              week={week}
              handleClick={this.handleClick}
              currentDayOfMonth={currentDayOfMonth}
              activeDay={this.state.activeDay}
            />
          );
        })}
      </div>
    );
  }
}

export default Calendar;

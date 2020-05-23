export function createCalendarDaysArr(numDays) {
  const calendarDaysArr = [];
  for (let i = 1; i <= numDays; i++) {
    calendarDaysArr.push(i);
  }
  return calendarDaysArr;
}

const weekDayArray = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];

export function updatedCalendarDaysArray(DOW, daysArray) {
  const numsDaysToPrepend = weekDayArray.indexOf(DOW);
  if (numsDaysToPrepend > 0) {
    for (let i = 1; i <= numsDaysToPrepend; i++) {
      daysArray.unshift(0);
    }
  }
  const numsDaysToAppend = 7 - (daysArray.length % 7);
  if (numsDaysToAppend > 0) {
    for (let i = 1; i <= numsDaysToAppend; i++) {
      daysArray.push(0);
    }
  }
  return daysArray;
}

export function createWeeksArray(formattedDaysArr) {
  const result = [];
  const numberOfWeeks = formattedDaysArr.length / 7;
  for (let i = 1; i <= numberOfWeeks; i++) {
    let tempArr = [];
    for (let j = 0; j < 7; j++) {
      tempArr.push(formattedDaysArr[(i - 1) * 7 + j]);
    }
    result.push(tempArr);
  }
  return result;
}

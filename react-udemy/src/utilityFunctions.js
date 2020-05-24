export const createCalendarDaysArr = (numDays) =>
  [...Array(numDays)].map((_, idx) => idx + 1);

const weekDayArray = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];

export const updatedCalendarDaysArray = (DOW, daysArray) => {
  const numDaysToPrepend = weekDayArray.indexOf(DOW);
  const numDaysToAppend = 7 - (daysArray.length % 7);

  return [...Array(numDaysToPrepend)]
    .fill(null)
    .concat(daysArray)
    .concat([...Array(numDaysToAppend)].fill(null));
};

export function createWeeksArray(formattedDaysArr) {
  return formattedDaysArr.reduce(
    function (accum, curr) {
      if (accum[accum.length - 1].length < 7) {
        accum[accum.length - 1].push(curr);
      } else {
        accum.push([curr]);
      }
      return accum;
    },
    [[]]
  );
}

// adds the suffix to the date
const addDateSuffix = (date) => {
  // sets up the variable
  let dateStr = date.toString();
  // get last char of date string
  const lastChar = dateStr.charAt(dateStr.length - 1);
  if (lastChar === "1" && dateStr !== "11") { // if 1 or 11 = st
    dateStr = `${dateStr}st`;
  } else if (lastChar === "2" && dateStr !== "12") { // if 2 or 12 = nd
    dateStr = `${dateStr}nd`;
  } else if (lastChar === "3" && dateStr !== "13") { // if 3 or 13 = rd
    dateStr = `${dateStr}rd`;
  } else { // otherwise = th
    dateStr = `${dateStr}th`;
  }
  // returns the date string
  return dateStr;
};

// function to format a timestamp, accepts the timestamp and an `options` object as optional parameters
module.exports = (
  timestamp,
  { monthLength = "short", dateSuffix = true } = {}
) => {
  // months
  let months;
  // if the format of the month is the short version
  if (monthLength === "short") {
    months = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    };
  } else {// otherwise we will return the full month name
    months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    };
  }

  const dateObj = new Date(timestamp);
  const formattedMonth = months[dateObj.getMonth()];
  // day of month
  let dayOfMonth;
  // day of month
  if (dateSuffix) {
    dayOfMonth = addDateSuffix(dateObj.getDate());
  } else {
    dayOfMonth = dateObj.getDate();
  }
  // year
  const year = dateObj.getFullYear();
  // hour
  let hour;
  // check for 24-hr time
  if (dateObj.getHours > 12) {
    hour = Math.floor(dateObj.getHours() / 2);
  } else {
    hour = dateObj.getHours();
  }
  // if hour is 0 then it's 12:00am so we will change it to 12
  if (hour === 0) {
    hour = 12;
  }
  // get minutes
  const minutes = dateObj.getMinutes();
  // set `am` or `pm`
  let periodOfDay;
  if (dateObj.getHours() >= 12) {
    periodOfDay = "pm";
  } else {
    periodOfDay = "am";
  }
  // sets up the variable for the timestamp
  const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
  // return the formatted timestamp
  return formattedTimeStamp;
};
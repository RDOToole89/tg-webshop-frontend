export const computeTime = (cityName: string, offsetUTC: number | string) => {
  // create new instance of Date
  const currentDate = new Date();

  // now you need to get UTC time in msec
  const utcTime =
    currentDate.getTime() + currentDate.getTimezoneOffset() * 60000;

  // create instance of several cities
  const newDateInstance = new Date(utcTime + 3600000 * Number(offsetUTC));

  // in this step you have to return time as a string
  // console.log('Local time of ' + cityName + ' is ' + newDateInstance.toLocaleString());
  return newDateInstance;
};

export const unixTimeStampCoverter = (timestamp: number) => {
  const dt = new Date(timestamp * 1000);
  let hr = dt.getHours();
  let m = '0' + dt.getMinutes();
  let s = '0' + dt.getSeconds();

  return dt;
};

export const formatDate = (dateIsoString: string) => {
  var d = new Date(dateIsoString),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('-');
};

export const countDownTimer = (
  hours: number = 24,
  mins: number = 0,
  secs: number = 0,
  ms: number = 0
) => {
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  const endDate = new Date().setHours(hours, mins, secs, ms);
  const now = new Date().getTime();
  let remainingTime = endDate - now;

  type TimeString = string | number;

  let daysLeft: TimeString = Math.trunc(remainingTime / day);
  let hoursLeft: TimeString = Math.trunc((remainingTime % day) / hour);
  let minutesLeft: TimeString = Math.trunc((remainingTime % hour) / min);
  let secondsLeft: TimeString = Math.trunc((remainingTime % min) / sec);

  if (daysLeft < 10) {
    daysLeft = '0' + daysLeft.toString();
  }
  if (hoursLeft < 10) {
    hoursLeft = '0' + hoursLeft.toString();
  }
  if (minutesLeft < 10) {
    minutesLeft = '0' + minutesLeft.toString();
  }
  if (secondsLeft < 10) {
    secondsLeft = '0' + secondsLeft.toString();
  }

  // console.log(
  //   `DAYS: ${daysLeft} HOURS: ${hoursLeft} MINS: ${minutesLeft} SECS: ${secondsLeft}`
  // );

  return {
    daysLeft,
    hoursLeft,
    minutesLeft,
    secondsLeft,
  };
};

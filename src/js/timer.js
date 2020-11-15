var moment = require('moment');

export function getTime() {
  const myDate = new Date();
  const myCoolDate = moment(myDate).format('LT');
  return myCoolDate;
}

export class StopWatch {
  static getTriangle() {
    return 100;
  }
}
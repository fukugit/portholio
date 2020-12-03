var moment = require('moment');

export class StopWatch {
  getNow() {
    const myDate = new Date();
    const myCoolDate = moment(myDate).format('LT');
    return myCoolDate;
  }
}
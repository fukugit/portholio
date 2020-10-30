/* 
  require
 */
var moment = require('moment');

// moment
const myDate = new Date();
const myCoolDate = moment(myDate).format('LT');
console.log('Time is ' + myCoolDate);

const moment = require('moment');

const myDate = new Date();
const myCoolDate = moment(myDate).format('MMMM Do YYYY, h:mm:ss a');

const time = document.getElementById('time');
time.textContent = myCoolDate;
console.log('This is sub.js');

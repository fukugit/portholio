const moment = require('moment');

const myDate = new Date();
const myCoolDate = moment(myDate).format('LT');

const time = document.getElementById('time');
time.textContent = myCoolDate;
console.log('This is main.js in 20210117-manga');

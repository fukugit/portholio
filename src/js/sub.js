const moment = require('moment');

const myDate = new Date();
myDate.setMinutes(myDate.getMinutes() + 30);
const myCoolDate = moment(myDate).format('LT');

const time = document.getElementById('comment');
time.textContent = `${myCoolDate} までに作ったろ！`;

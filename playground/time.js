var moment = require('moment');

// var date = new Date();
//
// console.log(date.getMonth());

var date = moment();
date.add(1,'years');
console.log(date.format('MMM Do YYYY h:mm:ss a'));

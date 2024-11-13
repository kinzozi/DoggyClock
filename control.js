//Init electron
const {app, BrowserWindow} = require('electron');
const url = require('url');

function boot() {
  win = new BrowserWindow({width:800, height: 810, frame: false,});
  win.loadURL(url.format({
    pathname: 'main.html',
    slashes: true
  }))
}



//date time functions
function showDay() {
  var d = new Date();
  var weekday = new Array(7);

  weekday[0] =  "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var day = weekday[d.getDay()];
  document.getElementById('day').innerHTML=day;
  setTimeout(showDay, 10000);
}

function showTime() {
  var d = new Date();

var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var suffix = "am"

if (h > 12) {
  h = h -12;

  var suffix = " pm"

}
if (h == 0) {
  h = 12;

}
if (s < 10) {
  s = s.toString();
  s = "0"+s;

}
if (m < 10) {
  m = m.toString();
  m = "0"+m;
}
clockUI = h + ":" + m + ":" + s + suffix;

document.getElementById('clockDisplay').innerHTML = clockUI;

setTimeout(showTime, 100);

}

//Show the Date
function showDate() {
  var d = new Date();
  var monthsOrder = new Array(12);

  monthsOrder[0] =  "January";
  monthsOrder[1] = "Feburary";
  monthsOrder[2] = "March";
  monthsOrder[3] = "April";
  monthsOrder[4] = "May";
  monthsOrder[5] = "June";
  monthsOrder[6] = "July";
  monthsOrder[7] = "August";
  monthsOrder[8] = "September";
  monthsOrder[9] = "October";
  monthsOrder[10] = "November";
  monthsOrder[11] = "December";


  var year = d.getFullYear();
  var date = d.getDate();
  var month = monthsOrder[d.getMonth()];

  currentDate = month + " " + date + "  " + year;

  document.getElementById('dateDisplay').innerHTML=currentDate;
  setTimeout(dateDisplay, 1000);
}




app.on('ready', boot);

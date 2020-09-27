//I didn't understand this one correctly, so I made two answers

// First
let today = "sunday";
var eventDay = 5;

let weekDay = [
  "sunday",
  "monday",
  "tuesday",
  "wendsday",
  "thursday",
  "friday",
  "saturday",
];

console.log(weekDay[5]);

//Second

let today = "saturday";
var i;
let weekDay = [
  "monday",
  "tuesday",
  "wendsday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

function getEventWeekday(day) {
  for (i = 0; i <= weekDay.length; i++) {
    if (weekDay[i] == today) {
      return "there is " + i + " Days till the event";
    }
  }
}

console.log(getEventWeekday());

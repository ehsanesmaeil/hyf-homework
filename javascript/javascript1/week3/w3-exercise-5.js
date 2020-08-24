let activities = [];
function addActivity(date, activity, duration) {
  activities.push({
    date: date,
    activity: activity,
    duration: duration,
  });
  return activities;
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "fb", 61);
console.log(activities);

let sumMin = 0;

function showStatus() {
  if (activities.length == 0) {
    return "Add some activities before calling showStatus";
  }

  for (let i = 0; i < activities.length; i++) {
    sumMin += activities[i]["duration"];
  }
  console.log(
    "You have added " +
      activities.length +
      " activities. They amount to " +
      sumMin +
      " min. of usage"
  );

  if (sumMin > 60) {
    return "Also, You have reached your limit, no more smartphoning for you!";
  }
}
console.log(showStatus());

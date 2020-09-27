const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "friends",
    days: 8,
    hours: 10,
    minutes: 30,
  },
  {
    title: "Modern Family",
    days: 13,
    hours: 7,
    minutes: 28,
  },
  {
    title: "Modern Family",
    days: 11,
    hours: 14,
    minutes: 46,
  },
];

let age = 80;

function logOutSeriesText() {
  // write code here
  for (let i = 0; i < seriesDurations.length; i++) {
    let timeSpend =
      seriesDurations[i].days * 24 * 60 +
      seriesDurations[i].hours * 60 +
      seriesDurations[i].minutes;

    timeSpend /= 80 * 365 * 24 * 60;
    timeSpend *= 100 * 1000;
    timeSpend = Math.round(timeSpend) / 1000;

    console.log(
      seriesDurations[i].title + "took " + timeSpend + " percent of my life"
    );
  }
}

logOutSeriesText(); // logs out the text found above

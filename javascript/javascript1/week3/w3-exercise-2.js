



let speedKmPerH = 50;
let distanceKm = 155;

function hourToGo() {
  let hour = Math.trunc(distanceKm / speedKmPerH);
  let min = distanceKm % speedKmPerH;
  return (
    "It will take " + hour + " hours and " + min + " minutes to arrive there."
  );
}

console.log(hourToGo());

const destinations = [
  {
    name: 'Tokyo',
    distance: '5936',
    flightDuration: '710',
  },
  {
    name: 'Miami',
    distance: '4426',
    flightDuration: '600',
  },
  {
    name: 'Singapore',
    distance: '6736',
    flightDuration: '770',
  },
];

const userFriendlyDestinations = destinations
  .map(destination => {
    destination.flightDuration = readableTimeFormat(destination.flightDuration);
    return destination;
  })
  .map(destination => {
    destination.distance = milesToKm(destination.distance);
    return destination;
  });

console.log(userFriendlyDestinations, destinations);

function pad(number) {
  return number < 10 ? `0${number}` : number;
}

function milesToKm(miles) {
  return Math.round(miles / 0.62137);
}
function readableTimeFormat(minutes) {
  return `${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`;
}

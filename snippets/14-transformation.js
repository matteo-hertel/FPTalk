function pad(number) {
  return number < 10 ? `0${number}` : number;
}

function milesToKm(miles) {
  return miles / 0.62137;
}
function readableTimeFormat(minutes) {
  return `${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`;
}

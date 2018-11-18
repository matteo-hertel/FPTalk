const cities = ['Torino', 'London', 'Dubai', 'London', 'Edinburgh'];

const friendlyMessage = cities
  .filter(haveILivedIn)
  .map(shout)
  .reduce(addBulletPoint, 'In my life I lived in: ');

console.log(friendlyMessage);
//In my life I lived in:
// - TORINO
// - LONDON
// - DUBAI
// - LONDON

function shout(string) {
  return string.toUpperCase();
}
function haveILivedIn(city) {
  return city !== 'Edinburgh';
}
function addBulletPoint(string, item) {
  return (string += `\n - ${item}`);
}

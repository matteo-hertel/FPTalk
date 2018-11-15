const cities = ['Torino', 'London', 'Dubai', 'London', 'Edinburgh'];

const friendlyMessage = cities
  .filter(city => haveILivedIn(city))
  .map(city => shout(city))
  .reduce((message, city) => {
    return addBulletPoint(message, city);
  }, 'In my life I lived in: ');

console.log(friendlyMessage);

function shout(string) {
  return string.toUpperCase();
}
function haveILivedIn(city) {
  return city !== 'Edinburgh';
}
function addBulletPoint(string, item) {
  return (string += `\n - ${item}`);
}
//In my life I lived in:
// - TORINO
// - LONDON
// - DUBAI
// - LONDON

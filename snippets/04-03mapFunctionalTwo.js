// List of cities I lived in and the next one I'd like to live in
const cities = ['Torino', 'London', 'Dubai', 'London', 'Edinburgh'];

const uppercaseCities = cities.map(city => shout(city));

console.log(uppercaseCities);

function shout(string) {
  return string.toUpperCase();
}
// [ 'TORINO', 'LONDON', 'DUBAI', 'LONDON', 'EDINBURGH' ]

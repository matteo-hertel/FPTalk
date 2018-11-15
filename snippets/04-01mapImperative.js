// List of cities I lived in and the next one I'd like to live in
const cities = ['Torino', 'London', 'Dubai', 'London', 'Edinburgh'];
const uppercaseCities = [];

for (let city of cities) {
  uppercaseCities.push(city.toUpperCase());
}

console.log(uppercaseCities);
// [ 'TORINO', 'LONDON', 'DUBAI', 'LONDON', 'EDINBURGH' ]

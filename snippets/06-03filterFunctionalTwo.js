// List of cities I lived in and the next one I'd like to live in
const cities = ['Torino', 'London', 'Dubai', 'London', 'Edinburgh'];

const citiesILivedIn = cities.filter(city => haveILivedIn(city));

console.log(citiesILivedIn);

function haveILivedIn(city) {
  return city !== 'Edinburgh';
}
// [ 'Torino', 'London', 'Dubai', 'London' ]

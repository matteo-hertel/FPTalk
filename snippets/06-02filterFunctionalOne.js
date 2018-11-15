// List of cities I lived in and the next one I'd like to live in
const cities = ['Torino', 'London', 'Dubai', 'London', 'Edinburgh'];

const citiesILivedIn = cities.filter(city => city !== 'Edinburgh');

console.log(citiesILivedIn);
// [ 'Torino', 'London', 'Dubai', 'London' ]

// List of cities I lived in and the next one I'd like to live in
const cities = ['Torino', 'London', 'Dubai', 'London', 'Edinburgh'];
const citiesILivedIn = [];

for (let city of cities) {
  if (city !== 'Edinburgh') {
    citiesILivedIn.push(city);
  }
}

console.log(citiesILivedIn);
// ['Torino', 'London', 'Dubai', 'London']

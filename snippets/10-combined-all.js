const cities = ['Torino', 'London', 'Dubai', 'London', 'Edinburgh'];

const friendlyMessage = cities
  .filter(city => city !== 'Edinburgh')
  .map(city => city.toUpperCase())
  .reduce((message, city) => {
    return (message += `\n - ${city}`);
  }, 'In my life I lived in: ');

console.log(friendlyMessage);
//In my life I lived in:
// - TORINO
// - LONDON
// - DUBAI
// - LONDON

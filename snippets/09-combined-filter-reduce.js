const cities = ['Torino', 'London', 'Dubai', 'London', 'Edinburgh'];

const friendlyMessage = cities
  .filter(city => city !== 'Edinburgh')
  .reduce((message, city) => {
    return (message += `\n - ${city}`);
  }, 'In my life I lived in: ');

console.log(friendlyMessage);
//In my life I lived in:
// - Torino
// - London
// - Dubai
// - London

// List of cities I lived in and the next one I'd like to live in
const cities = ['Torino', 'London', 'Dubai', 'London'];

const friendlyMessage = cities.reduce((message, city) => {
  return (message += `\n - ${city}`);
}, 'In my life I lived in: ');

console.log(friendlyMessage);
// In my life I lived in:
// - Torino
// - London
// - Dubai
// - London

// List of cities I lived
const cities = ['Torino', 'London', 'Dubai', 'London'];

const friendlyMessage = cities.reduce(
  (message, city) => addBulletPoint(message, city),
  'In my life I lived in: ',
);

console.log(friendlyMessage);
// In my life I lived in:
// - Torino
// - London
// - Dubai
// - London

function addBulletPoint(string, item) {
  return (string += `\n - ${item}`);
}

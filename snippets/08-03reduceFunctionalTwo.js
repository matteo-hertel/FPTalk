// List of cities I lived
const cities = ['Torino', 'London', 'Dubai', 'London'];

const friendlyMessage = cities.reduce(
  (message, city) => addBulletPoint(message, city),
  'In my life I lived in: ',
);

console.log(friendlyMessage);

function addBulletPoint(string, item) {
  return (string += `\n - ${item}`);
}
// In my life I lived in:
// - Torino
// - London
// - Dubai
// - London

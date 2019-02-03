var fs = require('fs');

var hi = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log('\n--New practicce: Reading a file')
console.log('Sync: ', hi);
// Asymc code 
var hi2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log('Async: ', data);
  }
});
module.exports = hi;
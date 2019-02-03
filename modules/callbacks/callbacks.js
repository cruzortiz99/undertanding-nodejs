function greet(callback) {
  console.log('Hello');
  var data = {
    name: 'John Doe'
  }
  callback(data);
};
console.log('\n--New practice: CallBacks')
greet(function (data) {
  console.log('callback was call');
  console.log(data);
});

greet(function (data) {
  console.log('another callback function was call ');
  console.log(data.name);
});

module.exports = greet;
function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var candy = ['kit kat', 'skittles', 'snickers'];

  candy.forEach(callback);
  return candy;
}

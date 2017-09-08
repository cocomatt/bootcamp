var countdownGenerator = function (x) {
  var countdownRange = [ -Math.abs(x) ];

  return function(x) {
    var i = 0;
    for (var i = 0; i < (x * 2); i++) {
      countdownRange.push[i];
    }
    return countdownRange[i]++;
  }
}

var countdown = countdownGenerator(3);

console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!
var makeLoadedDie = function() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var roll = -1;

  return function() {
    roll += 1;
    return list[roll];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie()); //returns 5
console.log(rollLoadedDie()); //returns 4
console.log(rollLoadedDie()); //returns 6
console.log(rollLoadedDie()); //returns 1
console.log(rollLoadedDie()); //returns 6
console.log(rollLoadedDie()); //returns 4

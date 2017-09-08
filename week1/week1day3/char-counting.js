function countLetters(str) {
  var freq = {};
  for (var i = 0; i < str.length; i++) {
    var character = str.charAt(i);
    if (freq[character]) {
      freq[character]++;
      } else {
      freq[character] = 1;
    }
  }
  return freq;
}

var str = process.argv.slice(2);
var str = str.join(" ").replace(/\s/g, "");
console.log(countLetters(str));


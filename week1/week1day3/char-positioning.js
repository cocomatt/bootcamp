function lettersFreqIndex(str){
  var count = {};
  for (i=0; i < str.length; i ++) {
    for (var i = 0; i < str.length; i ++) {
      if (count[str[i]]) {
        count[str[i]].push(i);
      } else {
        count[str[i]] = [i];
      }
    }
    return count;
  }
}

var str = process.argv.slice(2);
var str = str.join(" ").replace(/\s/g, "");
console.log(lettersFreqIndex(str));

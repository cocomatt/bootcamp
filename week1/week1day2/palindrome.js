function isPalindrome(str) {
  var noSpaces = str.toLowerCase().split(" ").join("");
  var mid = Math.floor(noSpaces.length/2);
  var last = noSpaces.length;
  for (var i = 0; i < last; i++) {
    if (noSpaces[i] !== noSpaces[last - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Test driver code. These should all log true.
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);


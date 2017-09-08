function obfuscate(password) {
  var passwordstring = password.toString();
  var password1 = passwordstring.replace(/a/g, "4").replace(/e/g, "3").replace(/o/g, "0").replace(/l/g, "1");
  return password1;
}

console.log(obfuscate(process.argv[2]));


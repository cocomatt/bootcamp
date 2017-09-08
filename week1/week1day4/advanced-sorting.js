var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function (a, b) {
  var aName = a.name;
  var bName = b.name;
  var aAge = a.age;
  var bAge = b.age;
  if(aName == bName)
  {
    return (aAge < bAge) ? 1 : (aAge > aAge) ? -1 : 0;  //desending by age
    //return (aAge < bAge) ? -1 : (aAge > aAge) ? 1 : 0; // ascending by age
  }
  else
  {
    return (aName < bName) ? -1 : 1;
  }
});

console.log(students);

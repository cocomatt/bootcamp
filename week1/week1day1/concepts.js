var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

function joinList(conceptList) {
  var concepts = conceptList.toString();
  concepts = concepts.replace(/,/g, ", ");
  return concepts;
}

concepts = joinList(conceptList);
console.log("Today I learned about " + concepts + ".");

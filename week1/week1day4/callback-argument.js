// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr);   // execute callback
    }
  }
}

function actionWhenFound(arr) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] === "Waldo") {
      console.log("Found Waldo at index " + i + "!");
    }
  }
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

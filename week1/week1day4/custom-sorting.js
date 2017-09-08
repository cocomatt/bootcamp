//Sort numerically and ascending:
var myarray=[25, 8, 7, 41]
myarray.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
    return a - b
});

console.log(myarray);
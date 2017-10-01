//
// Iterate Object
// //
// var obj = {a: 24, b: 12, c:21, d:15};
// var keys = Object.keys(obj);
// var newKeys = keys.sort(function(a, b){
//     return obj[b]- obj[a];
// });
//
// var sortableObj = newKeys.reduce(function(acc, currentValue){
//     acc[currentValue] = obj[currentValue];
//
//
//     return acc;
// }, {});
// console.log(sortableObj);//{ a: 24, c: 21, d: 15, b: 12 }


var array = ["red", "yellow", "red", "blue", "blue", "red"];
//Sort larger count item.
// red: 3 times
// blue: 2 times
// yellow 1 time
// result is
// [ 'red', 'blue', 'yellow' ]

var newArray = array.reduce(function(acc, currentValue){
    var existing = acc.hasOwnProperty(currentValue);
    if(existing){
        acc[currentValue]++;
    }else{
        acc[currentValue] = 1;
    }

    return acc;
}, {});

console.log(newArray); //{ red: 3, yellow: 1, blue: 2 }

// get keys in object
var keys = Object.keys(newArray); //[ 'red', 'yellow', 'blue' ]

// Sorted keys
var newKeys = keys.sort(function(a, b){
    return newArray[b] - newArray[a];
});
console.log(newKeys); //[ 'red', 'blue', 'yellow' ]





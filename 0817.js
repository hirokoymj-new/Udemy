var array = [3,6,1,7];

// function greaterThan(array, num){
//
//     var newArray = array.reduce(function(accumulator, currentValue){
//         if(currentValue > num){
//             var len = accumulator.push(currentValue);
//         }
//         return accumulator;
//     }, []);
//     return newArray;
// }
//
// console.log(greaterThan(array, 5));

// var newArray = arr.filter(callback[, thisArg])


// function greaterThan2(array, num){
//
//     var newArray = array.filter(function(currentValue){
//         return currentValue>num;
//     });
//     return newArray;
// }
//
// console.log(greaterThan2(array, 1));
//
// var result = array.reduce(function(accumulator, currentValue, currentIndex){
// }, initialValue);



// function total(array){
//     var result = array.reduce(function(accumulator, currentValue){
//         return accumulator + currentValue;
//     }, 0);
//     return result;
// }
//
// console.log(total([0,1,2,3]));//6

var array2 = [12, 5, 8, 130, 44];

function isBig(array, num){

    var result = array.reduce(function(accumulator, currentValue){
        if(currentValue > num){
            var len = accumulator.push(currentValue);
        }
        return accumulator;
    }, []);

    return result;
}

console.log(isBig(array2, 10));
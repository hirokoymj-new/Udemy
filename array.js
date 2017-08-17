// function countFives(numbers) {
//     var count = 0;
//     numbers.forEach(function(value, index){
//         if (value == 5){
//             count++;
//         }
//     });
//     return count;
// }
//
// console.log(countFives([5, 6, 2, 5, 9, 3, 5]));
// console.log(countFives([5, 6, 2, 5, 9, 3, 5, 4, 6, 7, 5, 4, 5, 5]));
// //https://github.com/hirokoymj/Algorithm_Date#differences-between-foreach-and-each
//
//
// function sum(a,b) {
//     return a+b;
// }
// console.log(sum(5,2));

// Example 3
// Use filter() or reduce()

// function greaterThan(array){
//     var result = array.reduce(function(accumlator, currentValue){
//         if(currentValue > 5){
//             var len = accumlator.push(currentValue);
//         }
//         return accumlator;
//     }, []);
//     return result;
// }
// console.log(greaterThan([4,5,6,7]));
//https://stackoverflow.com/questions/32722435/push-wont-work-as-expected-in-reduce

// Example 5
// for(var i=0; i<21; i++){
//     if( (i%2) == 0){
//         console.log(i + " the number is even.");
//     }else{
//         console.log(i + " the number is odd.");
//     }
// }

// Example 6
// When non-strict mode, this in a function refers to a global object (in a browser is Window object.)
// When strict mode, this is "undefined". In strict mode in a function, JavaScript set this value to "undefined" as a default.

// Example 7
// var testObj = {
//     name: "fred",
//     major: "music",
//     smallest: function(a, b){
//        if(a>b){
//            return b;
//        }else{
//            return a;
//        }
//     }
// }
//
// var result = testObj.smallest(5,2);
// console.log(result);


// Example 8
// function test() {
//     console.log(a); //undefined
//     console.log(foo()); //2
//
//     var a = 1;
//     function foo() {
//         return 2;
//     }
// }
//
// test();

//Example 9
"use strict";
// create array
// Math.random
//

// function makeCard(){
//
//     var kinds = ["Diamond", "Heart", "Club", "Spade"];
//     var cards = [];
//
//     kinds.forEach(function(value, index){
//         for(var i=1; i<14; i++ ){
//             cards.push(value + "-" + i);
//         }
//     });
//     cards.push("joker");
//     return cards;
//
// }
//
// var myCard = makeCard();
// console.log(game(myCard));
//
// function game(array){
//     //console.log(array);
//
//    // var result = Math.random();
//     var min = 1;
//     var max = 53;
//     var number;
//     while( (number = Math.floor(Math.random() * (max - min) + min)) == 53 ){
//         array[number];
//     }
//
//
//
// }


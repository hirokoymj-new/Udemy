"use strict";

/* Example 1*/
// function sayHello(name){
//     var text = "Hello " + name;
//     console.log(text);
// }
// sayHello("Hiroko");


// /* Example 1*/
// function sayHello(name){
//     var text = "Hello " + name;
//     function(){
//         console.log(text);
//     }
// }
// console.log(sayHello("Hiroko"));
//
//
//
// var foo = [];
// for(var i=0; i<10; i++){
//     (function(){
//         var y = i;
//         foo[y] = function(){return y};
//     })();
// }
//
// console.log(foo[0]());
// console.log(foo[1]());
// console.log(foo[2]());
//
// //
// //
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27
//
//
// function createBase(x){
//     var num = x;
//
//     return function(y){
//         num = x + y;
//         console.log(num);
//     }
// }
//
//
//
// (function f(n){
//     return ((n > 1) ? n * f(n-1) : n)})(4);

//4>1, true, 4 * f(4-1)
//3>1, true, 3 * f(3-1)
//2>1, true, 2 * f(2-1)
//1>1, false, 1


var x = 10;

function foo(){
    var y = 20;

    function bar(){
        var z = 15;
        var output = x + y + z;
        return output;
    }
    return bar;
}

var test = foo();
console.log(test()); //45
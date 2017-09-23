//https://www.thatjsdude.com/jsConcepts/concepts/scope.html
//global variable

// var a = 2;
//
// //global function
// function b(){
//     console.log(a);  //access global variable
// }
//
// b(); //execute global function.
//
//
//
// var a = 2;
// function b(){
//     var d = 21; //local variable
//     console.log(d); //can access it inside the function
// }
// b();  // 21
//
// console.log(d); //ReferenceError: d is not defined


// var a = 21;
//
// function b(){
//     var d = 7,
//         e = 8;
//         f = 9;
//
//     for(i =0; i<5; i++){
//         console.log(e);
//     }
// }
// b();

//
// var a = 2;
// function b(){
//     var d = 21;
//     function dog(){  console.log(a); }
//     dog(); //closure is created
// }
//
// function c(){ console.log(a); }
//
// b();
// c();

//  check array

var a = [];
var b = {};

console.log(typeof []); // object
console.log(typeof {}); // object

console.log(Array.isArray([]));
console.log(Array.isArray({}));



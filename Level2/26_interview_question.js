
// function test(){
//     var a = 2;
//     var b=3;
// };
// test();
//
// //console.log(a);
// console.log(b);



(function(){
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));




console.log("a defined? " + (typeof a !== 'undefined')); // a is a local variable of the function.  // false
console.log("b defined? " + (typeof b !== 'undefined')); // b is a global variable  // true


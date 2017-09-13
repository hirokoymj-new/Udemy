// https://www.toptal.com/javascript/interview-questions
//
// Question 1
//
// var bar = {};
//
// //console.log(bar===null);
//
//
// if(typeof bar === "object" && bar !== null){
//     console.log('bar is object');
// }


//
// Question 2
//
// (function(){
//     //var a = b = 3;
//     b = 3;
//     var a = b;
//
//
// })();
//
// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));



// function test(){
//     a="Hiroko";
// }
//
// console.log(a);


// Consider the two functions below. Will they both return the same thing? Why or why not?
// function foo1()
// {
//     return {
//         bar: "hello"
//     };
// }
//
// function foo2()
// {
//     return
//     {
//         bar: "hello"
//     };
// }
//
// console.log(foo1()); //type
// console.log(foo2()); //type


// function isInteger(x){
//     if(x%1 == 0){
//         console.log("x is interger");
//     }else{
//         console.log("x is not interger");
//     }
// }
//
// isInteger(2);

// Remove space from a string.

// var str = "A but tuba";
// //var str = "Is this all there is?";
// var patt1 = /\s/g;
//
// var new_string = str.replace(patt1, "");
// new_string = new_string.toLowerCase();
// var array  = new_string.split("");
// console.log(new_string);
// console.log(array);
// var reverse_string = array.reverse().join("");
// console.log(reverse_string);
//
// if(reverse_string == new_string){
//     console.log("this is parindorome");
// }




// var re = /(\w+)\s(\w+)/;
// var str = 'John Smith';
// var newstr = str.replace(re, '$2, $1');
// console.log(newstr);



// "use strict";
//
// var asim = {
//     checkThis: function(){
//         var self = this;
//
//         function checkOther(){
//             console.log(self);
//             self.moo = 1;
//         }
//         checkOther();
//         console.log(self.moo);
//         //console.log(window.moo);
//     }
// }
// asim.checkThis();


// var myObject = {
//     egg: "plant",
//     func: function() {
//         var self = this;
//         console.log("outer func: this.egg = " + this.egg);
//         console.log("outer func: self.egg = " + self.egg);
//         function test() {
//             console.log("inner func: this.egg = " + this.egg);
//             console.log("inner func: self.egg = " + self.egg);
//         };
//         test.call(self);
//     }
// }
// var func = myObject.func.bind(myObject);
// func();


var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());



// this.x = 9;    // this refers to global "window" object here in the browser
// var module = {
//     x: 81,
//     getX: function() { return this.x; }
// };
//
// module.getX(); // 81
//
// var retrieveX = module.getX;
// retrieveX();
//
// var boundGetX = retrieveX.bind(module);
// boundGetX(); // 81
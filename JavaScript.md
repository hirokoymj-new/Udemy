# Udemy Advanced JavaScript

## "use strict" mode
- It forces you to use valuables that have been declared with `var` keyword. This is to avoid accidentally declareing a global valuable.
- In NON-strict mode we can use any variable even if it's hasn't been defined with var.
- In strict mode we can't use variables that have not been declared with var first.

- Waring reserved JavaScript keyword - ex. let
- It can't delete functions or arguments. 
- It's safer to use "eval()" in strict mode because the value doesn't leak out. In without strict mode, the value inside eval leaks.
 
 
 
## pass-by value and pass-by reference
 
- The primitive types such as `string, numbers, booleans` are pass-by value. `pass-by value` is to pass a copy of valueA pass-by value is 
- `Object` is pass-by reference.
- **Pass-by value** is to pass a copy of value.
- **Pass-by reference** is to pass points.

**Example of pass-by value**
```js
"use strict";
var a = 1;
function foo(a){
    a = 2;
}
foo(a);
console.log(a); //1
```
_The value inside the function doesn't be effect in outer scope._ 

   
**Example of pass-by reference**   
```js
"use strict";
var a = {};
function foo(a) {
  a.moo = false;
}
foo();
console.log(a); // Object{moo: false}
```   

```js
"use strict";
var a = {'moo': 'too'};
function  foo() {
    a.too = 'moo';
}    
foo(a);
console.logo(a); //Object{moo: "too", too: "moo"}
```


```js
"use strict";
var a = 1;
var b = {};
function foo(x, y) {
  x = 2;
y.moo = 3;
}
 
foo(a, b);
console.log("a = " + a + "; b = " + JSON.stringify(b));
```




# Types and Equality
What are the different types in javascript?
- Boolean           //true/false
- Number            //1, 1.0
- String            //"a"
- Null              //null
- Undefined         //undefined
- Object            //new Object || {} curly braces notation

```js
typeof(1) //"number"
typeof('a') //string
typeof(true) //boolean
typeof(undefined) //undefined
typeof(null) // object
typeof({}) //object
```
- typeof(null) is 'object'.
- A statically typed language like Java
- A dynamically typed language like JavaScript

# What is different between 'undefine' and 'null'?
- `undefined` - it doesn't initialized with another value so it doesn't know what type of value. no value
- `undefined` - JavaScript Engine inform you that it does NOT initialized with another value or an unknown property of an object.
- `null` - null is used by a programmers to indicate 'no value'. JavaScript Engine will never set a value to null. A programmer (a human being) set a value to 'null'.

```js
null==undefined // true
```

# What is different between '==' and '==='?
- '===' checkes for both type and value equality.
- '==' checkes the equlity of value only.




# NaN (not a number)
- NaN stands for 'not a number'.
- Perhaps the result of a bad calculation. "abc"/4
- NaN equal to ANYTHING is always false, even when compared to itself.
 ```js
"abc"/4 //NaN 

typeof(NaN) //number

NaN == NaN // false - NaN compared to itself is always false.
```

# How to edit and run a code in Chrome? 
1. Open Chrome(any page) and right click and then select "inspect".
2. Click on "Sources" tab on the top bar.
3. Click on "Snippets" tab on the left side.
4. Create new Snippet clicking on + New Snippet.
5. To show console on the bottom, "customize and control Devtools" on the right side window and then select "Show console drawer".
6. To run code, click on arrow button on the bottom bar in Sources window.

**Shortcut** 
- Comment/uncomment : "Cmd + /" 

- [Using Code Snippets in Chrome Developer Tools](https://www.alexkras.com/using-code-snippets-to-test-save-and-reuse-javascript-code-in-chrome-developer-tools/)

# this
## Global scope
`this` is always global object. In a browser it's `Window` object.

## Inside a Function
- Non-strict mode, this sets a global object which is `Window` object in a browser.
- In strict mode, this is 'undefined'.
- In use strict mode the default value of this is undefined
- Because we are in use strict mode and not calling the function directly from the animal object, this is now undefined
-In strict mode this defaults to undefined

## Inside an object
- If `this` is called in a function inside an object, `this` becomes "object" that is called on.
- If `this` is called a nested function, it becomes "Windows" object. To avoid 
- 'this’ refers to an object which ‘owns’ the method, but there is an exception. If this is called in a nested function, this becomes a global object. 
This is different how it is called. To avoid the differences, to define new valuable on the top of the function and then add this into self valualbe.  




# call vs apply
- The first param to the apply function is used as the "this" variable, the array is then used for each of the params to the function being called


# function vs function expression
**Function**
```js
function test(){
    console.log("hello");
}
```

**Function Expression**
```js
var a = function(){
    console.log("hello");
}
```
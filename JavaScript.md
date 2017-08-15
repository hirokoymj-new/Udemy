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




# call, apply and bind
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


example of bind()

```js
var sayHello = function(last_name){
    console.log("Hello" +  this + " " + last_name)
}.bind("Hiroko");

sayHello("Yamaji"); // Hello Hiroko Yamaji 
```


# What is the prototype chain?
- Every object will inherit from one of the objects - even if you create an empty object A, the object A inherite a base object.
- New object can create an existing object.
- Using `Object.create()` method, an object can inherit an another objects.
- Using `object.isPrototypeOf()` method, you can see what a parent object is.  
- [Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

# what is the scope chain? (section 4)

- First, Lexical Scope (also called Static Scope), in C-like syntax: Every inner level can access its outer levels.
- The scope chain means that Javascript looks for code their own scope first. If there is a problem, it looks outer scope. If there is a problem in next outer scope, it looks another outer scope. It keep continuing to reach global scope. It is the scope chain.
- How Javascript resolves a variable. It looks inside inner scope first. then the outer scope until it finds a variable. The most outer scope is global scope. If it can't find a variable, an error happens.
- the variables are resolved in the order in which the code is written on the page.


**example 1**
```js
function foo(){
    console.log(myvar);
}

function goo(){
    var myvar = 1;
    foo();
}

goo();// ReferenceError: myvar is not defined.
```


**correction of example 1**

```js
function goo(){
    var myvar = 1;
    function foo(){
        console.log(myvar);
    }
    foo();
}

goo();// 1
```

# What is IIFE and why might be use it?
- Immidiately invoked function
- IIFE has an own executed scope.

1) Delete function name, which is anonymouse function. 
2) Wrap the anonymouse function in some brackets. 
3) Add bracket to invoke a function that usually invoke a function.

**Function**
```js
function test(){
    console.log('hello');    
}
```

**Immediately Invoked Function Expression**
```js
(function (){
    console.log('hello');
})();
```


# Section 4
# What is the variable hoisting?


**Variable**

```js
"use strict";
console.log(a); //undefined
var a = "test";
```

**Function**
```js
"use strict";
foo(); // hiroko
function foo(){
 	console.log('hiroko');
};

```
**anonymouse function assigned to a variable**
```js
"use strict";
foo(); // error
var foo = function(){
	console.log('hiroko');
};

```

- A variable and a function are automatically hoisting from top in the page. For example, if a variable `A` is called in the first line and the second line, 'A' is declared and assigned to "TEST", JavaScript Engine is assigned to "undefine" for first line and there is no error.
- Above rule is same as a function.
- But if an anonymouse function that assigned to a variable, the function must execute after the variable. 
 

# What is scope chain?
- The scope chain is how JavaScript resolve a variable.
- JavaScript Engine looks for a variable its own inside scope first. Then if there is no a variable in the scope, it looks for **an outer scope until to find a variable**. 
- JavaScript looks for a variable its own inside scope first. If it doesn’t find it, it looks for next outer scope. JavaScript keep looking a variable until it is find. If the search reaches to a global scope, it is stopped.

**Example**

```js
function foo(){
	console.log(myvar);
}

function goo(){
	var myvar = 1;
	foo();
}

goo();// error myvar is not defined.
```

# What is IIFE and why might you use it?

- IIFE is `Immediately Invoked Function Expression`.

**main.js** - when the main.js file is called, the below function is automatically invoked.

```js
// main.js
(function () {
    var thing = {"hello": "main"};
    console.log(thing);
})(); //<-- invoked itself!!


```

# What are function closure?

**Variable Lifetime**
- Global variables live as long as your application (your window / your web page) lives.
- Local variables have short lives. They are created when the function is invoked, and deleted(reset) when the function is finished.

```js
var foo = [];
for(var i=0; i<10; i++){
    foo[i] = function(){return i}
}
console.log(foo[0]()); //10
console.log(foo[1]()); //10
console.log(foo[2]()); //10
```



```js
var foo = [];
for(var i=0; i<10; i++){
    (function(){
        var y = i;
        foo[i] = function(){return y}

    })();

}
console.log(foo[0]()); //0
console.log(foo[1]()); //1
console.log(foo[2]()); //2
```
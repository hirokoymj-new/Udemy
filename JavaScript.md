# Udemy Advanced JavaScript

## "use strict" mode
- It forces you to use valuables that have been declared with `var` keyword. This is to avoid accidentally declareing a gloval valuable.
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

- In NON-strict mode we can use any variable even if it's hasn't been defined with var.
- In strict mode we can't use variables that have not been declared with var first.


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
- undefined - it doesn't initialized with another value so it doesn't know what type of value. no value
- null - 

- `undefined` - JavaScript Engine inform you that it does NOT initialized with another value or an unknown property of an object.
- `null` - null is used by a programmers to indicate 'no value'. JavaScript Engine will never set a value to null. A programmer (a human being) set a value to 'null'.

```js
null==undefined // true
```

# What is different between '==' and '==='?
- '===' checkes for both type ad value equality.
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
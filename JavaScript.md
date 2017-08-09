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

   
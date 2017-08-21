# What is "use strict"?

1. A valuable must declare using var keyword, which could avoid accidentally creating a global variable.
2. In strict mode, we can use a variable only declared var keyword, which is help to syntax check.  
3. Stop to using reserved Javascript keyword - ex. let 
4. Use strict mode can't delete variable or a function.



**Example 1**
- use strict mode, a variable and a function can't delete.
```js
"use strict";
var foo =1;
delete foo; // !! Uncaught SyntaxError: Delete of an unqualified identifier in strict mode. !!

function moo(){}
delete moo;

```

**Example 2**
```js
"use strict";

var let = 1;//Uncaught SyntaxError: Unexpected strict mode reserved word
console.log(let);
```

**Example 3**
```js
"use strict";

function moo(arg){
  delete arg;//Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
}

```
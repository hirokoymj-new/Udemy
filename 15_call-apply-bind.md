# call, apply and bind


- In Javascript, this value is NOT unstable in JavaScript. `this` value depends on how this calls and also it's different between non-static mode and use static mode
- call(), apply() and bind() use to stabilize `this` value in a function.
 

**Example - A function property:  name**
```js
function test(){
    console.log(this);
}
console.log(test.name);//test
```

**Example - A function property:  length**

```js
function test(param1, param2){
    console.log(this);
}
console.log(test.length);//2
```

**Example - A function is an object so try to add a property moo.**
```js
function asim(param1, param2){
    console.log(this);
}
asim.moo = 1;
console.log(asim.name);
```

**Example - Using a funciton on a function - toString()**
```js
function asim(param1, param2){
    console.log(this);
}
console.log(asim.toString());
//function asim(param1, param2){
//     console.log(this);
// }
```
## Call()

```js
function asim(){
    console.log(this);
}
asim.call(); //Window object
asim();     // Window object
```


```js
"use strict";
function asim(){
    console.log(this);
}
asim.call(); // undefined
```


```js
"use strict";
function asim(){
    console.log(this);
}
asim.call({}); // Object{}
```


```js
"use strict";
function asim(){
    console.log(this);
}
asim.call(1); //1
```


```js
"use strict";

var asim = {
    checkThis: function(){
        console.log(this); //asim object

        function checkOther(){
            console.log(this); //undefined
        }
        checkOther();
    }
}
asim.checkThis();
```

```js
"use strict";

var asim = {
    checkThis: function(){
        console.log(this); //asim object

        function checkOther(){
            console.log(this); //asim object
        }
        checkOther.call(this);
    }
}
asim.checkThis();
```


```js
"use strict";

function a(b,c,d){
    console.log(this);  //1
    console.log(b);     //2
    console.log(c);     //3
    console.log(d);     //4
}
a.call(1,2,3,4);
```

## apply()

```js
"use strict";

function a(b,c,d){
    console.log(this);  //1
    console.log(b);     //2
    console.log(c);     //3
    console.log(d);     //4
}

a.apply(1,[2,3,4]);
```
Why might you use call why I use apply?
Normally you would use call unless the function takes a variable number of parameters.


```js
function sum(){
    var total = 0;
    for(var i=0; i<arguments.length; i++){
        total += arguments[i];

    }
    return total;
}
var x = sum(1,2,3);
console.log(x);//6
```

```js
function sum(){
    var total = 0;
    for(var i=0; i<arguments.length; i++){
        total += arguments[i];

    }
    return total;
}
var x = sum.call(null, 1,2,3);
console.log(x);//6
```

```js
function sum(){
    var total = 0;
    for(var i=0; i<arguments.length; i++){
        total += arguments[i];

    }
    return total;
}
var things = [1,2,3,4,53,2,4,5,6,1];
var x = sum.apply(null, things);
console.log(x);//81
```

## bind()

- bind must use the function expression


```js
var a = function(){
    console.log(this);
}.bind(1);

a();//1
a();//1
a();//1

```


```js
var a = function(){
    console.log(this);
}.bind(1);

var asim = {
    func: a 
}

asim.func(); //1

```


Example - bind() doesn't work the declaring a function. it only works with function expression.
```js
function a(){
    console.log(this);
}.bind(1); // Syntax Error


```


```js
"use strict";

var asim = {
    checkThis: function(){
        console.log(this); //asim object

        var checkOther = function(){
            console.log(this); // asim object! - not "undefined"
        }.bind(this); 
        
        checkOther();
    }
}
asim.checkThis();

```
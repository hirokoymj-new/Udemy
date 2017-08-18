# Closure

- Normally a valuable in a function is deleted as soon as a function has been executed. But in Closure, a valuable can keep alive even if the function is finished to execute. This is a closure.
- Closure is an inner function and refers outer scope's variable or functions evey if the outer scope function has been finished to exetute.



**Example 1**
```js
function sayHello(name){
    var text = "Hello " + name;
    return function(){ //<-- Closure
        console.log(text);
    }
}
var sayHiroko = sayHello("Hiroko");
sayHiroko();// Hello Hiroko
```



**Example2** This is NOT Closure.

```js
var foo = [];
for(var i=0; i<10; i++){
    foo[i] = function(){return i}
}

console.log(foo[0]()); //10
console.log(foo[1]()); //10
console.log(foo[2]()); //10
```

**Example 3**  This is Closure.
```js
var foo = [];
for(var i=0; i<10; i++){
    (function(){
        var y = i;
        foo[y] = function(){ // Closure
            return y
        };
    })();
}

console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());
```


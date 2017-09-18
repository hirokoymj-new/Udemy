# JS -  Level 2



## Question 1
How would you empty the array below?

```js
var a = [1,2,3,4,5];
```

**Answer**
```js
a.length = 0;
//or 
a = [];

```

## Question 2

```js
this.x = 9;    // this refers to global "window" object here in the browser
var module = {
    x: 81,
    getX: function() { return this.x; }
};

module.getX();                  // what is output?

var retrieveX = module.getX;
retrieveX();                    // What is output?

var boundGetX = retrieveX.bind(module);
boundGetX();                    // What is output?
```

**Answer**

```js
module.getX();                  // 81

var retrieveX = module.getX;
retrieveX();                    // 9

var boundGetX = retrieveX.bind(module);
boundGetX();                    // 81
```


## Question 3

What is the issue with this code and how can it be fixed.

```js
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
```

**Answer 1**
```js
var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity()); // undefined
console.log(hero.getSecretIdentity()); //John Doe
```


**Answer 2** 

- Fixed version. Both are console "John Doe". Using `bind()`.

```js
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity()); // John Doe
```

**Answer 3**

- Fixed version. Both are console "John Doe". Using `call()`.

```js
var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity.call(hero)); // 

```

## Question 4
```js
var a = {a: 1};
var b = {a: 1};

a == b      // what is output?  
a === b     // what is output? 
```

**Answer**
```js
a == b // false  
a === b  //false
```

## Question 5
- Hoisting

```js
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();
```

**Answer** 
```js
logIt(); // undefined
```


## Question 6
- Hoisting

```js
function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}
test();
```


**Answer**
```js
test(); // undefined
        // 2
```


## Question 7
Fix the previous question’s issue so that the last console.log() prints Aurelio De Rosa.

```js
var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;
console.log(test());
```

**Answer-1** 
- Use `bind()`
```js
console.log(obj.prop.getFullname());            //Aurelio De Rosa
var test = obj.prop.getFullname.bind(obj.prop);
console.log(test());                            //Aurelio De Rosa
```


**Answer-2** 
- Use `call()`
```js
console.log(obj.prop.getFullname());            //Aurelio De Rosa
var test = obj.prop.getFullname;
console.log(test.call(obj.prop));               //Aurelio De Rosa
```

## Question 8
```js
(function() {
   var a = b = 5;
})();

console.log(b);
```

**Answer**
- a is declared with var keyword. It means a is a local variable of the function.
- b is a global variable.
- if strict mode was enabled, `b=5` raise the error Uncaught ReferenceError: b is not defined.


```js
(function() {
    //var a = b = 5;
    var a = "b";        // local variable
    b = 5;              // global variable
})();

console.log(b);         // 5
```



## Question 9

```js
(function(){
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined')); 
```

## Answer
```js
console.log("a defined? " + (typeof a !== 'undefined')); // a is a local variable of the function.  // false
console.log("b defined? " + (typeof b !== 'undefined')); // b is a global variable  // true
```


## Question 10
- Define a repeatify function on the String object

```js
console.log('hello'.repeatify(3));
```


## Answer
```js
String.prototype.repeatify = function(count){
    var str = [];
    for(var i=0;i< count; i++){
        str.push(this);
    }
    var result = str.join("");
    return result;
}
```
## Question 11
Create array
```js
var array = [1,2,3];
var array = new Array(1, 2, 3);
```
In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.


## Question 12 
- Copy of array

```js
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
```

## Answer
```js
var vegeCopy = vegetables.slice(); // //[ 'Cabbage', 'Turnip', 'Radish', 'Carrot' ]
```


## References:
- (9/11) https://www.upwork.com/i/interview-questions/javascript/
- (9/12) https://www.toptal.com/javascript/interview-questions
- (9/13) https://www.sitepoint.com/5-typical-javascript-interview-exercises/
- (9/15) https://www.sitepoint.com/5-typical-javascript-interview-exercises/

# JS -  Level 2



## Question 1
How would you empty the array below?

```js
var a = [1,2,3,4,5];
```

**Answer 1**
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

**Answer 2**

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

**Answer 3-1**
```js
var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity()); // undefined
console.log(hero.getSecretIdentity()); //John Doe
```


**Answer 3-2** 

Fixed version - using bind method, hero object is passed to getSecretIdentity explicitly.
```js
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity()); // John Doe
```

## References:
- (9/11) https://www.upwork.com/i/interview-questions/javascript/
- (9/12) https://www.toptal.com/javascript/interview-questions

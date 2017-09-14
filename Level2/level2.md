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



## References:
- (9/11) https://www.upwork.com/i/interview-questions/javascript/
- (9/12) https://www.toptal.com/javascript/interview-questions
- (9/13) https://www.sitepoint.com/5-typical-javascript-interview-exercises/
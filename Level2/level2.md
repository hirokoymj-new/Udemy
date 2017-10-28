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
var vegeCopy = vegetables.slice(); //[ 'Cabbage', 'Turnip', 'Radish', 'Carrot' ]
```

## Question 13
 
Sum all the values of an array

```js
var array = [3,5,2];
```

## Answer

```js
var sum = array.reduce(function(acc, currentValue, index){
    return acc + currentValue;
}, 0);

console.log(sum); //10
```

## Question 14
Check if object key exists within array

```js
var mycar = {make: 'Honda', model: 'Accord', year: 1998};
```


## Answer-1
- Use [IN operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)

```js
if('make' in mycar){
    console.log("make key exists in mycar object");
}
```

## Answer-2
- Use [Object.hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
```js
mycar.hasOwnProperty('year'); //true
```

## Question 15
Counting instances of values in an object

```js
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
//{'Alice':2, 'Bob':1, 'Tiff':1, 'Bruce':1}
```

## Answer
```js
var newObj = names.reduce(function(acc, currentValue, index){

    var existing = acc.hasOwnProperty(currentValue);

    // var existing
    if(existing){
        acc[currentValue]++;
    }else{
        acc[currentValue] = 1;
    }
    return acc;
}, {});

console.log(newObj);
```


## Question 16
Flatten array by same key.

```js
var array = [
    {name:"foo1",value:"val1"},
    {name:"foo1",value:["val2","val3"]},
    {name:"foo2",value:"val4"}
];
//[ { name: 'foo1', value: [ 'val1', 'val2', 'val3' ] },  { name: 'foo2', value: [ 'val4' ] } ]
```

## Answer
```js
var newarray = array.reduce(function(acc, currentValue){
    var existing = acc.map(function(value, index){
        return value.name
    }).indexOf(currentValue.name);

    if(existing == -1){
        var tmp = {};
        tmp['name'] = currentValue.name;
        tmp['value'] = [currentValue.value];
        acc.push(tmp);
    }else{
        if(typeof currentValue.value == 'object'){
            acc[existing].value = acc[existing].value.concat(currentValue.value)
        }else{
            acc[existing].value.push(currentValue.value);
        }
    }
    return acc;

}, []);
```

## Question 17
- check Array
```js
console.log(typeof []); 
console.log(typeof {});
```

## Answer
- Use `Array.isArray()` method to check if Array or not because typeof [] returns "object" not Array.

```js
console.log(typeof []); // object
console.log(typeof {}); // object

console.log(Array.isArray([]));
console.log(Array.isArray({}));
```

## Question 18
**Check prime**
- divisor
- dividend

```js
function isPrime(num){
    var divisor = 2;

    while(divisor<num){
        if(num%divisor==0 ){
            return false;
        }
       divisor++;
    }
    return true;
}

```

```js
console.log(isPrime(137)); //true
console.log(isPrime(237)); //false
```

## Question 19
**Find prime factors**

```js
function findPrimeFactor(num){
    var divisor = 2;
    var result = [];

    while(divisor<num){
        console.log(divisor);
        if(num%divisor==0 ){
            result.push(divisor);
        }
        divisor++;
    }
    return result;
}

result = findPrimeFactor(4);
console.log(result);
```

## Question 20
**Convert $('#form').serializeArray() to JSON**

```js
var formArray = [
    {name: "firstname", value: "Hiroko"},
    {name: "lastname", value: "Yamaji"}
];
// {firstname: Hiroko, lastname: Yamaji}
```

## Answer
```js
var output = formArray.reduce(function(acc, currentValue, index){
    acc[currentValue.name] = currentValue.value;
    return acc;
},{});
console.log(output); //{ firstname: 'Hiroko', lastname: 'Yamaji' }
```

## Question 21
- Iterate object

```js
var obj = {a: 24, b: 12, c:21, d:15};
```

## Answer
- use `for..In` loop
```js
for(var key in obj){
    console.log(obj[key]);
}
```

## Question 22
- Get keys in Object

```js
var obj = {a: 24, b: 12, c:21, d:15};
```

#Answer
```js
var keyArray = Object.keys(obj);
console.log(keyArray); //[ 'a', 'b', 'c', 'd' ]
```

## Question 23
- Sort objects by value
```js
var obj = {a: 24, b: 12, c:21, d:15};
```

## Answer
1. Get key values array in Object.
2. Sort key values.
3. create new obje by sorted order.

```js
var obj = {a: 24, b: 12, c:21, d:15};
var keys = Object.keys(obj);
var newKeys = keys.sort(function(a, b){
    return obj[b]- obj[a];
});

var sortableObj = newKeys.reduce(function(acc, currentValue){
    acc[currentValue] = obj[currentValue];
    return acc;
}, {});
console.log(sortableObj);//{ a: 24, c: 21, d: 15, b: 12 }
```


## Question 24
Count the items and sorted by large count.


```js
var array = ["red", "yellow", "red", "blue", "blue", "red"];
//Sort larger count item.
// red: 3 times, blue: 2 times, yellow: 1 time
// [ 'red', 'blue', 'yellow' ]
```

## Answer 24

```js
var newArray = array.reduce(function(acc, currentValue){
    var existing = acc.hasOwnProperty(currentValue);
    if(existing){
        acc[currentValue]++;
    }else{
        acc[currentValue] = 1;
    }
    return acc;
}, {});

console.log(newArray); //{ red: 3, yellow: 1, blue: 2 }

// get keys in object
var keys = Object.keys(newArray); //[ 'red', 'yellow', 'blue' ]

// Sorted keys
var newKeys = keys.sort(function(a, b){
    return newArray[b] - newArray[a];
});
console.log(newKeys); //[ 'red', 'blue', 'yellow' ]
```

## Question 25
- Array, map(), indexOf()

```js
var data = {
    products : [
        {"id": 1, "product_name": 'Casma', "qty": 1, "price": 38},
        {"id": 2, "product_name": 'Yola', "qty": 1, "price": 48},
        {"id": 3, "product_name": 'Casma', "qty": 1, "price": 38},
        {"id": 4, "product_name": 'Yola', "qty": 1, "price": 48}
    ],
    userId: '555',
    orderId: 10
};
```

- Check if id=5 exists in product array
```js
var existing_index1 = data.products.map(function(value, index){
    return value.id;
}).indexOf(5);
console.log(existing_index1); //-1
```

- Check if id=3 exists in product array

```js
var existing_index2 = data.products.map(function(value, index){
    return value.id;
}).indexOf(3);
console.log(existing_index2); //2
```


## Question 26 JSON
- What is JSON?
- JSON stands for **J**ava**S**cript **O**bject **N**otation
- JSON is **text**, written with JavaScript object notation.

Syntax rules
- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays

```js
var person = { "name":"John", "age":31, "city":"New York" };
```

```js
{"employees":[
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
]}
```
**Sending Data**

If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server:
```js
var myObj = { "name":"John", "age":31, "city":"New York" };
var myJSON = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;
```

**Receiving Data**

If you receive data in JSON format, you can convert it into a JavaScript object:
```js
var myJSON = '{ "name":"John", "age":31, "city":"New York" }';
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;
```

## References:
- (9/11) https://www.upwork.com/i/interview-questions/javascript/
- (9/12) https://www.toptal.com/javascript/interview-questions
- (9/13) https://www.sitepoint.com/5-typical-javascript-interview-exercises/
- (9/15) https://www.sitepoint.com/5-typical-javascript-interview-exercises/
- (9/22) https://www.thatjsdude.com/index.html
- (bubble sort) https://en.wikipedia.org/wiki/Sorting_algorithm#Bubble_sort

- [IN operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
```js
function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16];
bubbleSort(numbers);
console.log(numbers);
```
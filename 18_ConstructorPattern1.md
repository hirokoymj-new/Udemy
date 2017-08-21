# Constructor Pattern - Part 1

- `new` keyword
- instance
- inheritance
- An instance can share same prototype and the function from constructor.


**Exampl 1** - Error - because in strict mode, the default value of this is undefined.
```js
"use strict";
function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}
var student1 = Person("Hiroko", "Yamaji");

```


**Example 2** - The "new" keyword performs below activity.
```js
"use strict";
function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}

var dude = new Person("Hiroko", "Yamaji");
console.log(dude);

// The "new" keyword performs below activity.
var dudu = {};
Person.call(dude, "Hiroko", "Yamaji");
console.log(dude);
```

**Example 3** - Creating `dude` instance using Person function constructor.
```js
function Person(first_name, last_name){
    this.first_name = first_name; 
    this.last_name = last_name;
    this.full_name = function(){
        return this.first_name + " " + this.last_name;
    }
}

var dude = new Person("Hiroko", "Yamaji");
console.log(dude.full_name());
```

**Example 3** - How to add a function in class -  #2 */
- object.prototype

```js
function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
    this.full_name = function(){
        return this.first_name + " " + this.last_name;
    }
}
Person.prototype.get_first_name = function () {
    return this.first_name;
}

var dude = new Person("Hiroko", "Yamaji");
console.log(dude.full_name());
console.log(dude.get_first_name());
```

**Example 4** - we never want to change a first name.
```js
function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
    this.full_name = function(){
        return first_name + " " + last_name; //<-- POINT!
    }
}
Person.prototype.get_first_name = function () {
    return this.first_name;
}

var dude = new Person("Hiroko", "Yamaji");
console.log(dude.full_name());
console.log(dude.get_first_name());

dude.first_name = "Kayo";
console.log(dude.full_name());

```





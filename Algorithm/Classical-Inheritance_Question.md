# Classical inheritance

1. Create Shape object that has properties x and y. Shape object has a move function. 

**Answer-1**
- The move function is defined **IN A BODY** of shape object.
```js
"use strict";

function Shape(x, y){
    this.x = x;
    this.y =y;
    this.move = function(){
        console.info('Shape moved.');
    }
}

function Rectangle(){
    Shape.call(this, 5,10);
}

var rec = new Rectangle();
rec.move();
console.log("X of rec is " + rec.x);
console.log("Y of rec is " + rec.y);
```

**Answer-2**
- The move function is defined **outside of** shape object using prototype function. so Rectangle class has to **use Object.create() to inheritance move function**.

```js
"use strict";

// Shape object
function Shape(x, y){
    this.x = x;
    this.y =y;
}
Shape.prototype.move = function(){
    console.info('Shape moved.');
}

// Rectangle Object
function Rectangle(){
    Shape.call(this, 5,10);
}
Rectangle.prototype = Object.create(Shape.prototype);

var rec = new Rectangle();
rec.move(); //Shape moved.
console.log("X of rec is " + rec.x); // X of rec is 5
console.log("Y of rec is " + rec.y); // Y of rec is 10
```


## References
 - [Classical inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

## Syntax
```js
Object.create(proto[, propertiesObject])

```

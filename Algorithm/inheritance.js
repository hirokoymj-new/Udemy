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



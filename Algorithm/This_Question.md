# This 

**Question 1**

```js
var obj = {a: 'Custom'};

var a = 'Global';

function whatsThis(arg) {
  return this.a;  
}
```

How to print below code.
```js
whatsThis();          
whatsThis.call(obj);  
whatsThis.apply(obj); 
```

**Question 2**
```js
function add(c, d) {
    return this.a + this.b + c + d;
}
var o = {a: 1, b: 3};

```

```js
add.call(o, 5, 7);
add.apply(o, [10, 20]);
```

**Question 3**
```js
function f() {
    return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g());

var h = g.bind({a: 'yoo'}); // bind only works once!
console.log(h());
```

How to print below code.
```js
var o = {a: 37, f: f, g: g, h: h};
console.log(o.f(), o.g(), o.h());
```

**Question 4**
-  NON-String mode

```js
this.x = 9;
var module = {
    x: 81,
    getX: function() { return this.x; }
};
```

How to print below code.

```js
module.getX(); 

var retrieveX = module.getX;
retrieveX(); 
```

**Question 5**

How to print below code.

```js
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // 
```

**Question 6**
```js
var myObject = {
      egg: "plant",
      func: function() {
            var self = this;   
            console.log("outer func: this.egg = " + this.egg);
            console.log("outer func: self.egg = " + self.egg);
           (function() {
            console.log("inner func: this.egg = " + this.egg);
            console.log("inner func: self.egg = " + self.egg);
            }());
       }
};
myObject.func();
```


**Question 7**
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

console.log(obj.prop.getFullname());// Aurelio De Rosa
var test = obj.prop.getFullname; 
console.log(test()); //John Doe
```

**Question 8**
```js
"use strict";
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

console.log(obj.prop.getFullname());// Aurelio De Rosa
var test = obj.prop.getFullname; 
console.log(test()); //undefined
```






## References
- [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN - bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- [Up-work](https://www.upwork.com/i/interview-questions/javascript/)
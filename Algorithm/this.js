/*function add(c, d) {
    return this.a + this.b + c + d;
}
var o = {a: 1, b: 3};

add.call(o, 5, 7);
add.apply(o, [10, 20]);*/







/*

function f() {
    return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g());

var h = g.bind({a: 'yoo'}); // bind only works once!
console.log(h());

var o = {a: 37, f: f, g: g, h: h};
console.log(o.f(), o.g(), o.h());*/



// NON-Strict mode

this.x = 9;    // this refers to global "window" object here in the browser
var module = {
    x: 81,
    getX: function() { return this.x; }
};

console.log(module.getX()); // 81

var retrieveX = module.getX;
console.log(retrieveX());
// returns 9 - The function gets invoked at the global scope
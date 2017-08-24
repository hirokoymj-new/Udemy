# Prototype chain

- every object will inherit from one of the objects.
- the objects in Javascript are linked to others in what is called a prototype chain.

```js
var animal = {
    kind: "human"
}
console.log(animal);

var asim = {};
asim.__proto__ = animal;
console.log(asim.kind);
console.log(animal.isPrototypeOf(asim));//true
asim.kind = 'igloo';
console.log(asim.kind); //igloo
console.log(animal.kind); //human
```
- asim object doesn't have kind property but its prototype is actually the 

## Object create function
- Object.create()

```js
var animal = {
    kind: "human"
}
console.log(animal);

// var asim = {};
// asim.__proto__ = animal;

var asim = Object.create(animal);

console.log(asim.kind);
console.log(animal.isPrototypeOf(asim));//true
asim.kind = 'igloo';
console.log(asim.kind); //igloo
console.log(animal.kind); //human
```


```js
var animal = {
    kind: "human"
}

var asim = Object.create(animal, {food: {value: "mango"}});
console.log(asim.food);//mango



```


## References:
- [MDN: Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
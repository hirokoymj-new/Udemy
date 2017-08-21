# Constroctor OO Pattern - Part2

```js
function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}
Person.prototype.full_name = function () {
    return this.first_name +  " " + this.last_name;
}

var dude = new Person("asim", "hussain");
dude.first_name = "Moo";
console.log(dude.full_name());
```
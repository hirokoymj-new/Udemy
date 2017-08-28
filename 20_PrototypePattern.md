# Prototype OO Pattern

- Only using prototype chain
- NO function constructor and NO `new` keyword
- This way is not mimic way for classical language such like Java.
```js
var Person = {
	full_name: function(){
		return this.first_name + " " + this.last_name; 
	}
};

var asim = Object.create(Person);
console.log(asim); //{}
```


**Method 1**

```js
var Person = {
	init: function(first_name, last_name){
		this.first_name = first_name;
		this.last_name = last_name;
		return this;
	},
	full_name: function(){
		return this.first_name + " " + this.last_name; 
	}
};

var asim = Object.create(Person);
asim.init("asim", "hussain")
console.log(asim.full_name());
```

**Method 2**

```js
var Person = {
	full_name: function(){
		return this.first_name + " " + this.last_name; 
	}
};

var asim = Object.create(Person, {
	first_name: {value: "asim"},
	last_name: {value: "hussain"}
});

console.log(asim.full_name());
```

**Method 3**

```js
var Person = {
	full_name: function(){
		return this.first_name + " " + this.last_name; 
	}
};

function PersonFuctory(first_name, last_name){
	var person = Object.create(Person);
	person.first_name = first_name;
	person.last_name = last_name;
	return person;

}

var asim = PersonFuctory("asim", "hussain");
console.log(asim.full_name());
```

## How to implement inheritance?
```js

```
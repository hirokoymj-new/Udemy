# Question 1 - Array


**1. Remove "mandarin" in myFish array.**

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
```

**2. Reformat array.**
```js
var kvArray = [{key: 1, value: 10}, 
               {key: 2, value: 20}, 
               {key: 3, value: 30}];
// [{1: 10}, {2: 20}, {3: 30}]
```

**3. Reform array.** 

```js
var employees = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

// Result
/*
[ { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } ];
*/
```


**4. Check if the city "New York" exists.".**

```js
var cityArray = [
{id: 1, city: "New York"},
{id: 2, city: "Los Angeles" },
{id: 3, city: "Washington DC" },
{id: 4, city: "San Jose" },
{id: 5, city: "Mountain View" }
];	
```

**5. Create new array**  
```js
var myArray = [
	{'color':'red', 'name': 'redName'},
	{'color':'blue', 'name': 'blueName'},
	{'color':'green', 'name': 'greenName'},
	{'color':'yellow', 'name': 'yellowName'}
];
// Create new array [ 'red', 'blue', 'green', 'yellow' ]
```

# Question 1 Answer

**1. Remove "mandarin" in myFish array.**
```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removeItem = myFish.splice(myFish.indexOf("mandarin"), 1);
console.log(myFish);
```

**2. Reformat array.**

- Use array.reduce()
```js
var kvArray = [{key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}];
```

```js
var newArray = kvArray.reduce(function(acc, currentValue){
    var tmp = {};
    tmp[currentValue.key] = currentValue.value;
    var len = acc.push(tmp);
    return acc;
}, []);
```

- Use array.map()
```js
var newArray2 = kvArray.map(function(currentValue, index, array ){
    var tmp = {};
    tmp[currentValue.key] = currentValue.value;
    return tmp;
});
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
```

```js
var newArray = employees.reduce(function(acc, currentValue){
    var skill = currentValue.skill;

    var existingIndex = acc.map(function(element, index){
        return element.skill;
    }).indexOf(skill);

    if(existingIndex == -1){ //not existing
        var tmp = {};
        tmp.skill = currentValue.skill;
        tmp.user = [ currentValue.user ];
        tmp.count = 1;
        acc.push(tmp);
    }else{
        var targetIndex = acc.map(function(element, index){
           return element.skill;
        }).indexOf(skill);

        acc[targetIndex].user.push(currentValue.user);
        acc[targetIndex].count++;
    }
    return acc;
}, []);
```


**4. Check if the city "New York" exists**
```js
var cityArray = [
{id: 1, city: "New York"},
{id: 2, city: "Los Angeles" },
{id: 3, city: "Washington DC" },
{id: 4, city: "San Jose" },
{id: 5, city: "Mountain View" }
];
```

```js
function checkExisting(array, city){
    var existingIndex = array.map(function(element, index){
        return element.city;
    }).indexOf(city);

    if(existingIndex == -1){
        console.log(city + " does not exist");
    }else{
        console.log(city + " exists in the array");
    }
}
checkExisting(cityArray, "New York");
```

**5. Create new array** 
```js
var myArray = [
    {'color':'red', 'name': 'redName'},
    {'color':'blue', 'name': 'blueName'},
    {'color':'green', 'name': 'greenName'},
    {'color':'yellow', 'name': 'yellowName'}
];
```

```js
var newArray = myArray.map(function(currentValue, index){
    return currentValue.color;
});
```

## References:

- [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

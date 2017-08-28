# Array.reduce()

**Syntax**
```js
var result = array.reduce(function(accumulator, currentValue, currentIndex){}, initialValue);
```

**Q1: Write a function to total in array.**
```js
var array = [0, 1, 2, 3];
total is 6.
```

```js
function total(array){
    var result = array.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    }, 0);
    return result;
}
console.log(total([0,1,2,3]));//6
```


**Q2: Write a function to return greater than 10 in array.**
```js
var array = [12, 5, 8, 130, 44];

function isBig(array, num){

    var result = array.reduce(function(accumulator, currentValue){
        if(currentValue > num){
            var len = accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
    
    return result;
}

console.log(isBig(array, 10));
```




#Array.splice()
- The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

**Syntax**
```js
array.splice(start, deleteCount)
array.splice(start, deleteCount, item1, item2, ...)
```

**Q1: remove "mandarin" in myFish array**

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var index_mandarin = myFish.indexOf('mandarin');
myFish.splice(index_mandarin, 1);
console.log(myFish); //[ 'angel', 'clown', 'sturgeon' ]

```
# Math

**Q1: Generate random number 0-99**

```js
Math.floor(Math.random()*100);
```
- Step 1 Generate random number 0-1(1 is exclosive).
- Step 2 Multiply max number that you want to + 1.
- Step 3 Downward the result using Math.floor().

**Q2: Generate random number 0-50**
```js
Math.floor(Math.random()*51);
```

**Q3: Generate random number 30-90**

```js
//Math.floor(Math.random()*91)          // Step1: 0-90
//Math.floor(30+Math.random()*91)       // Step2: 30-120
Math.floor(30+(Math.random()*61)        // Step3: 30-90
```

**Q4: Generate random number 1-100**
```js
//Math.floor(Math.random()*101);            //Step1: 0-100
//Math.floor(1+Math.random()*101);          //Step2: 1-101
Math.floor(1+Math.random()*100);            //Step 3: 1-100
```


**Q5: Random number for a deck of Card with Joker**
- The deck of card is 52 + joker = 53
- Generate the number 0-52
```js
Math.floor(Math.random()*53); //0-52
```

**Q6: Generate random number 1-12**
```js
// Math.floor(Math.random()*13) //0-12
// Math.floor(1+Math.random()*13) //1-13
Math.floor(1+Math.random()*12) //1-12
```


**Q7: Generate random number 5-7**
```js
// Math.floor(Math.random()*8); //0-7
// Math.floor(5+Math.random()*8); //5-12
Math.floor(5+Math.random()*3); //5-7
```
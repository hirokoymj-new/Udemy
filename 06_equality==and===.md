# What is difference between '==' and '==='?

1. '===' checkes for both type and value equality.
2.  - '==' checkes the equlity of value only.
3. triple equlity is only true to compare exact same value. any other situation it's a false.




**Example 1**  some weired equality.

```js
'' == '0' // false
0 == '' //true
0 == '0' //true
false == 'false' //false

```



# Triple Equality 

![strict equality table](http://www.hirokoymj.com/images/EqualityTable_triple.png)


# Double Equality

![strict equality table](http://www.hirokoymj.com/images/EqualityTable_double.png)


# References:
- http://dorey.github.io/JavaScript-Equality-Table/

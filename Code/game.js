"use strict";
// range: 0-10
// random
// splice
// reach: 5

//0-10
var myArray = [0,1,2,3,4,5,6,7,8,9];
var len = myArray.indexOf(5);
var newArray = myArray.splice(len, 1);

console.log("myArray: " + myArray);
console.log("newArray: " + newArray);



// var num = Math.floor(Math.random() * (11));
// var stop = 10;
//
// function game(){
//     var count = 0;
//     var testArray = [0,1,2,3,4,5,6,7,8,9];
//     var end = 5;
//
//     while(true){
//         var num = Math.floor(Math.random() * (10));//0-9
//         myArray.indexOf(num);
//
//         if(num==10){
//             console.log(num);
//             break;
//         }
//         console.log(num);
//     }
//
// }


// make a card = heart, club, diamond, spade = (4 x 13) + joker = 53
// generate a random number - range is 0-num Math.random()x
// card = card.splice(x,1)



var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var index_mandarin = myFish.indexOf('mandarin');
myFish.splice(index_mandarin, 1);
console.log(myFish); //[ 'angel', 'clown', 'sturgeon' ]





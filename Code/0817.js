"use strict";


// function sayHello(name){
//     var text = "Hello " +  name;
//
//     function greeting(){
//         console.log(text);
//     }
//     return greeting;
//
// }
//
//
// var greeting  = sayHello("Hiroko");
// greeting();

function gameSetUp(){
    var array = [0,1,2,3,4,5,6,7,8,9,10];

    function drawCard(){
        var len = array.length;
        var randomNum = Math.floor(Math.random() * (len));//0-10
        var deleteNum = array[randomNum];

        array.splice(array.indexOf(deleteNum),1);
        console.log("randomNum: " +  randomNum);
        console.log("deletedNum:" + deleteNum);
        console.log("remains: " + array);

        return deleteNum;
    }
    return drawCard;
}


function playGame(players){
    var drawCard = gameSetUp();

    // game begin
    var count = 0;
    while(true){
        var myCard = drawCard();
        console.log("Player: " + players[count]);
        console.log("myCard: " + myCard);

        if(myCard == 5){
            console.log('game over');
            break;
        }

        count++;
        if(count == players.length){
            count = 0;
        }
        console.log("---------");
    }
}

var players = ["A","B","C"];
playGame(players);

// makeCard [0-52] total is 53//
// drawCard
// gameOverCard = 52;
// playGame






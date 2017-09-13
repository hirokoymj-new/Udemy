"use static";

// var card = ["heart-1", "heart-2", "heart-3", "heart-4", "heart-5", "Joker"]; //lenght = 6
//
// function random(length){
//     return Math.floor(Math.random()*length);
// }
//
// var players = ["A", "B", "C"];
// var count = 0;
//
// while(card.length){
//     var num = random(card.length);
//     var mycard = card.splice(num, 1);
// console.log("mycard:" + mycard);
//
//     if(mycard == "Joker"){
//         console.log("this is a joker - looser is " + players[count] );
//         break;
//     }
//     count++;
//     if(count==players.length){
//         count = 0;
//     }
// }



function playGame(players){
    var card = ["heart-1", "heart-2", "heart-3", "heart-4", "heart-5", "Joker"]; //lenght = 6
    var count = 0;

    function random(length){
        return Math.floor(Math.random()*length);
    }


    while(card.length){
        var num = random(card.length);
        var mycard = card.splice(num, 1);
        console.log("mycard:" + mycard);

        if(mycard == "Joker"){
            console.log("this is a joker - looser is " + players[count] );
            card.length = 0;// get out while loop
            //break;          // get out if condition
        }
        count++;
        if(count==players.length){
            count = 0;
        }
    }
}


// Players
var group_A = ["A", "B"];
var group_B = ["X", "Y", "Z"];


// Set up game
playGame(group_A);
playGame(group_B);




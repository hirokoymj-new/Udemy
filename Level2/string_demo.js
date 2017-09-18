//https://www.sitepoint.com/5-typical-javascript-interview-exercises/


String.prototype.repeatify = function(count){
    var str = [];
    for(var i=0;i< count; i++){
        str.push(this);
    }
    var result = str.join("");
    return result;
}

console.log('hello'.repeatify(3));
console.log('hiroko'.repeatify(3));


var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
var vegeCopy = vegetables.slice(); //[ 'Cabbage', 'Turnip', 'Radish', 'Carrot' ]
console.log(vegeCopy);



///// 1 //////
// var array = [3,5,2];
//
// var sum = array.reduce(function(acc, currentValue, index){
//     return acc + currentValue;
// }, 0);
//
// console.log(sum);

//// 2 /////
// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// //{'Alice':2, 'Bob':1, 'Tiff':1, 'Bruce':1}
// var output = {};
//
//
// var mycar = {make: 'Honda', model: 'Accord', year: 1998};
// // if('make' in mycar){
// //     console.log("make key exists in mycar object");
// // }
//
//
// console.log(mycar.hasOwnProperty('year')); //true


// var newObj = names.reduce(function(acc, currentValue, index){
//
//     var existing = acc.hasOwnProperty(currentValue);
//
//     // var existing
//     if(existing){
//         acc[currentValue]++;
//     }else{
//         acc[currentValue] = 1;
//     }
//     return acc;
// }, {});
//
// console.log(newObj);
//
// var testObj = {'Alice':2, 'Bob':1, 'Tiff':1, 'Bruce':1};
//
// if("Alice" in testObj){
//     console.log("Alice exists");
// }
//
// console.log(testObj.hasOwnProperty('Alice'));





///// 3 /////
var array = [
    {name:"foo1",value:"val1"},
    {name:"foo1",value:["val2","val3"]},
    {name:"foo2",value:"val4"}
];
//[ { name: 'foo1', value: [ 'val1', 'val2', 'val3' ] },  { name: 'foo2', value: [ 'val4' ] } ]



//
// var a1 = array.map(function(currentValue, index){
//     return currentValue.name;
// }).indexOf("foo1");
// console.log(a1);
//
//
//
var newarray = array.reduce(function(acc, currentValue, index){

    var existing = acc.map(function(value, index){
        return value.name
    }).indexOf(currentValue.name);

    if(existing == -1){
        var tmp = {};
        tmp['name'] = currentValue.name;
        tmp['value'] = [currentValue.value];
        acc.push(tmp);
    }else{
        if(typeof currentValue.value == 'object'){
            acc[existing].value = acc[existing].value.concat(currentValue.value)
        }else{
            acc[existing].value.push(currentValue.value);
        }

    }
    return acc;

}, []);

console.log(newarray);




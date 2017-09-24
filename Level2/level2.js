var formArray = [
    {name: "firstname", value: "Hiroko"},
    {name: "lastname", value: "Yamaji"}
];
// {firstname: Hiroko, lastname: Yamaji}

var output = formArray.reduce(function(acc, currentValue, index){
    acc[currentValue.name] = currentValue.value;
    return acc;
},{});


console.log(output);

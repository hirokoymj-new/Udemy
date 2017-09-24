//
// function isPrime(num){
//     var divisor = 2;
//
//     while(divisor<num){
//         //console.log(divisor);
//
//         if(num%divisor==0 ){
//             return false;
//         }
//        divisor++;
//     }
//     return true;
// }
// console.log(isPrime(137)); //true
// console.log(isPrime(237)); //false


function findPrimeFactor(num){
    var divisor = 2;
    var result = [];

    while(divisor<num){
        console.log(divisor);
        if(num%divisor==0 ){
            result.push(divisor);
        }
        divisor++;
    }
    return result;
}

result = findPrimeFactor(4);
console.log(result);
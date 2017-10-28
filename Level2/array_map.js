var data = {
    products : [
        {"id": 1, "product_name": 'Casma', "qty": 1, "price": 38},
        {"id": 2, "product_name": 'Yola', "qty": 1, "price": 48},
        {"id": 3, "product_name": 'Casma', "qty": 1, "price": 38},
        {"id": 4, "product_name": 'Yola', "qty": 1, "price": 48}
    ],
    userId: '555',
    orderId: 10
};

console.log(data.products);
//========  Check if id=5 exists in product array.=============/
//
var existing_index1 = data.products.map(function(value, index){
    return value.id;
}).indexOf(5);
console.log(existing_index1); //-1

//========  Check if id=3 exists in product array.=============/
var existing_index2 = data.products.map(function(value, index){
    return value.id;
}).indexOf(3);
console.log(existing_index2); //2




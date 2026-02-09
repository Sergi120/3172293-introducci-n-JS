//ForEach Son metodos exclusivos de arreglos
const shoppingCart = [
    { productName: 'Smart TV 60', price: 300 },
    { productName: 'Smart TV 50', price: 200 },
    { productName: 'Tablet', price: 500 },
    { productName: 'Sound-Bar', price: 900 },
    { productName: 'Google Assistant', price: 600 },
    { productName: 'Sound-Bar', price: 400 },
    { productName: 'PlayStation', price: 800 },
    { productName: 'Wii', price: 450 },
    { productName: 'Mouse', price: 50 },
]
//Recorrer un arreglo por aca elemento
//shoppingCart.forEach(function (product){
//    console.log(product);
//});


//Recorrer un arreglo por aca elemento
//shoppingCart.forEach(function (product){
//    console.log(product.price);
//});

//shoppingCart.forEach(function (product){
//    console.log(product.productName);
//});

//shoppingCart.forEach(function (product){
  //  console.log(product.color);
//});

shoppingCart.forEach((product) => { console.log(product.price);
});

shoppingCart.forEach((product) => { console.log(product.color);
});

shoppingCart.forEach((product) => { console.log(product.productName);
});

shoppingCart.forEach((product) => { console.log(product);
});
// El objeto literal 
// Esta es la forma mas comun, pero No es muy dinamico que digamos
// De esta forma el objeto tiene diferentes variables

const product ={
    productName : "Mouse",
    ProductPrice : 50000,
    productColor : "red"
}

//asi se crea un segundo objeto con el objeto literal
const product2 ={
    productName : "Key board",
    ProductPrice : 80000,
    productColor : "Blue"
}

//==========================================

//Objeto constructor
// Este objeto contructor debe contener todos los diferentes valores que van a formar parte del objeto
// En los parentesis de la funcion llegan los parametros

function Product(productName, ProductPrice, productColor){
 this.productName = productName;
 this.ProductPrice = ProductPrice;
 this.productColor = productColor;
}

const product3 = new product("Mouse", 35000, "Green");
const product4 = new product("cell phone", 45000, "black");
const product5 = new product("PC", 500000, "White");

console.log(product3);
console.log(product4);
console.log(product5);
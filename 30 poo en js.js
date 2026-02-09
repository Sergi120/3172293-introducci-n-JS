// POO Programacion Orientada a Objetos
// Una clase en JS es una plantilla para crear objetos, que comparten misma opiedades y metodos
// Una clase es como un molde que describe como seranlos objetos y que podran hacer
//constructor es  un metodo del sistema que esas variables se puedan usarse en otras partes si no se usa constructor no funciona
class Product {
   constructor(productName, ProductPrice){
    this.productName = productName;
    this.ProductPrice = ProductPrice;
   }

   formatProduct(){
     return `El producto ${this.productName} tiene un precio de ${this.ProductPrice}`
   }
}

const product1 = new Product("Remote control", 15000)
const product2 = new Product("SSD", 220000)

console.log(product1.formatProduct());
console.log(product2.formatProduct());

//========================================
// Herencia en JS
// La herencia en JS permite que los objetos reutilicen propiedades y metodos de otros

class Book extends Product{
    constructor(bookName, bookPrice, isbn){
     super(bookName, bookPrice);
     this.isbn = isbn;  
    }

    formatProduct(){
        return `${super.formatProduct()}y su ISB es ${isbn}`
    }
}; 
const book1 = new Book("El perfume", 20000, 13759);

book1.formatProduct();

console.log(book1.formatProduct());
//ejercicio con la clase carro vamos a heredar dos tipos de carros distintos

class fullcar {
 constructor (brand, color, model, id, airConditioned, zoomRom){
this.brand = brand;
this.color = color;
this.model = model;
this.id = id;
this.airConditioned = airConditioned;
this.sunroof = sunroof;
}

return(){
    return `El vehiculo ${this.brand} esta arrancando y ¿este carro tiene aire a condicionado?: ${this.airConditioned}`

}

};

class BasiCar extends fullcar{

constructor(brand, color, model, id, electric){
super (brand, color,  model, id, ``,``)
this.electric = electric;
};

run(){
this.return`${super.run()}`
};

};

console.log(car2.run());


class MiddleCar extends fullcar{

constructor(brand, color, model, id, airConditioned){
super (brand, color,  model, id, airConditioned,``)
};

runMiddleCar(){
 return`${super.run()}`
};

};

const car5 = new MiddleCar("Hyundai", "White", "110", 4567, false);

console.log(car5.runMiddleCar());
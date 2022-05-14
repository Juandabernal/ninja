const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Ninja {
    constructor (nombre, salud){ 
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.valor = 3;
    }

    sayName () {
        console.log(this.nombre);
    }
   
    showStats () {
        console.log(this.nombre, this.velocidad, this.salud);
    }
    drinkSake () {
        this.salud += 10;
    }
}

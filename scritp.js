

class Ninja  {
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
class Sensei extends Ninja {
    constructor(nombre){
        super (nombre, 200);
        this.velocidad = 10;
        this.fuerza = 10;
        this.Sabiduria = 10;
    }
    speakWisdom () {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }

    drinkSake () {

    }

    showStats () {
        console.log(this.nombre, this.velocidad, this.salud, this.fuerza);
    }

}
const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

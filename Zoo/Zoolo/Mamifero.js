const Animal = require('./Animal');

// Creamos la clase Mamifero
class Mamifero extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.tipo = 'Mamifero';
    }

    emitirSonido() {
        console.log(`${this.nombre} dice: grunir`); // Cambiado para imprimir directamente
    }
}

module.exports = Mamifero;

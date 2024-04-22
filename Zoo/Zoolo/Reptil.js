const Animal = require('./Animal'); // Importación de la clase base Animal

class Reptil extends Animal {
    constructor(nombre, edad, region) {
        super(nombre, edad);
        this.tipo = 'Reptil';
    }

    emitirSonido() {
        console.log(`${this.nombre} dice: siseo`);
    }
}

module.exports = Reptil;

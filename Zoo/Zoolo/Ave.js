const Animal = require('./Animal'); // Importación de la clase base Animal

class Ave extends Animal {
    constructor(nombre, edad, colorPlumaje) {
        super(nombre, edad);
        this.tipo = 'Ave';
    }

    emitirSonido() {
        console.log(`${this.nombre} dice: piar`);
    }
}

module.exports = Ave;

const Animal = require('./Animal'); // Importación de la clase base Animal

class Ave extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.tipo = 'Ave';
    }

    emitirSonido() {
        console.log(`${this.nombre} dice: Piar`);
    }
}

module.exports = Ave;

// Creamos la clase animal
class Animal {
    // Constructor sirve para hacer la encapsulación
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para emitir un sonido
    emitirSonido() {
        console.log('El animal hace un sonido');  // Cambiado para imprimir directamente
    }
}

// Hacemos la exportación de nuestra clase
module.exports = Animal;

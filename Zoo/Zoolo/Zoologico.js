//Importación de Dependencias
const Mamifero = require('./Mamifero');
const Ave = require('./Ave');
const Reptil = require('./Reptil');

class Zoologico {
    constructor() {
        this.animales = [];
    }

    agregarAnimal(animal) {
        if (animal instanceof Animal) {
            this.animales.push(animal);
        } else {
            console.log("Solo se pueden agregar instancias de Animal y sus subclases.");
        }
    }

    mostrarAnimales() {
        this.animales.forEach(animal => {
            console.log(`${animal.nombre}, ${animal.edad} años, Sonido típico: ${animal.emitirSonido()}, Tipo: ${animal.tipo}`);
        });
    }

    contarAnimalesPorTipo() {
        const conteo = { Mamifero: 0, Ave: 0, Reptil: 0 };
        this.animales.forEach(animal => {
            if (animal instanceof Mamifero) {
                conteo.Mamifero++;
            } else if (animal instanceof Ave) {
                conteo.Ave++;
            } else if (animal instanceof Reptil) {
                conteo.Reptil++;
            }
        });
        return conteo;
    }

    totalAnimales() {
        return this.animales.length;
    }
}

//Importación de Dependencias
module.exports = Zoologico;

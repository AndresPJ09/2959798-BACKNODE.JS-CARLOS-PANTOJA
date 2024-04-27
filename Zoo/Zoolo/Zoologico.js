// Importación de clases para cada tipo de animal
const Mamifero = require('./Mamifero');
const Ave = require('./Ave');
const Reptil = require('./Reptil');

// Definición de la clase Zoologico
class Zoologico {
    constructor() {
        // Lista para almacenar los animales del zoológico
        this.animales = [];
    }

    // Método para agregar un animal al zoológico
    agregarAnimal(animal) {
        // Verifica si el objeto es instancia de Animal o sus subclases
        if (animal instanceof require('./Animal')) {
            this.animales.push(animal);
        } else {
            // Mensaje de error si el objeto no es del tipo correcto
            console.log("Solo se pueden agregar instancias de Animal y sus subclases.");
        }
    }

    // Método para crear un animal basado en el tipo especificado
    crearAnimal(tipo, nombre, edad) {
        switch (tipo) {
            case '1':
                return new Mamifero(nombre, parseInt(edad));
            case '2':
                return new Ave(nombre, parseInt(edad));
            case '3':
                return new Reptil(nombre, parseInt(edad));
            default:
                // Manejo de tipo no válido
                console.log('Tipo no válido.');
                return null;
        }
    }

    // Método para mostrar todos los animales en el zoológico
    mostrarAnimales() {
        if (this.animales.length === 0) {
            console.log("No hay animales en el zoológico.");
            return;
        }
        this.animales.forEach(animal => {
            console.log(`${animal.nombre}, ${animal.edad} años, Tipo: ${animal.tipo}`);
        });
    }

    // Método para contar los animales por tipo y devolver un objeto con el conteo
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

    // Método para hacer que todos los animales emitan sus sonidos característicos
    emitirSonidosAnimales() {
        if (this.animales.length === 0) {
            console.log("No hay animales en el zoológico para emitir sonidos.");
            return;
        }
        this.animales.forEach(animal => animal.emitirSonido());
    }
}

// Exportación de la clase Zoologico para su uso en otros archivos
module.exports = Zoologico;

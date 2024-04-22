// main.js
const readline = require('readline');
const Zoologico = require('./Zoologico');
const Mamifero = require('./Mamifero');
const Ave = require('./Ave');
const Reptil = require('./Reptil');

const zoo = new Zoologico();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function iniciarIngreso() {
    rl.question('Seleccione el tipo de animal (1: Mamífero, 2: Ave, 3: Reptil): ', tipo => {
        rl.question('Ingrese nombre del animal: ', nombre => {
            rl.question('Ingrese edad del animal: ', edad => {
                procesarAnimal(tipo, nombre, edad);
            });
        });
    });
}

function procesarAnimal(tipo, nombre, edad) {
    let animal;
    switch (tipo) {
        case '1':
            animal = new Mamifero(nombre, parseInt(edad));
            break;
        case '2':
            animal = new Ave(nombre, parseInt(edad));
            break;
        case '3':
            animal = new Reptil(nombre, parseInt(edad));
            break;
        default:
            console.log('Tipo no válido. Por favor, inicie de nuevo.');
            return iniciarIngreso();
    }

    zoo.agregarAnimal(animal);
    console.log('Animal agregado correctamente.');

    rl.question('¿Desea agregar otro animal? (si/no): ', respuesta => {
        if (respuesta.toLowerCase() === 'si') {
            iniciarIngreso();
        } else {
            console.log('Gracias por usar el sistema del zoológico.');
            rl.close();
        }
    });
}

iniciarIngreso();

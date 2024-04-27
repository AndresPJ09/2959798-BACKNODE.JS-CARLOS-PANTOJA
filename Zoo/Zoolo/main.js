const readline = require('readline');
const Zoologico = require('./Zoologico');
const zoo = new Zoologico();

// Crear la interfaz de readline para manejar la entrada y salida del terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenuPrincipal() {
    console.log("\n========================================");
    console.log("Bienvenido al sistema de gestión del Zoológico");
    console.log("========================================");
    console.log("1. Agregar un nuevo animal");
    console.log("2. Mostrar todos los animales");
    console.log("3. Contar animales por tipo");
    console.log("4. Emitir sonidos de todos los animales");
    console.log("5. Salir");
    console.log("========================================\n");

    rl.question("Seleccione una opción: ", opcion => {
        console.log(""); // Espacio adicional para claridad
        menuRespuesta(opcion);
    });
}

function menuRespuesta(opcion) {
    switch (opcion) {
        case '1':
            iniciarIngreso();  // Agregar nuevo animal
            break;
        case '2':
            zoo.mostrarAnimales();  // Mostrar todos los animales registrados
            promptContinue();
            break;
        case '3':
            console.log(zoo.contarAnimalesPorTipo());  // Contar animales por tipo
            promptContinue();
            break;
        case '4':
            zoo.emitirSonidosAnimales();  // Emitir sonidos de todos los animales
            promptContinue();
            break;
        case '5':
            console.log("Saliendo del sistema del zoológico. ¡Hasta pronto!");  // Salir del programa
            rl.close();
            break;
        default:
            console.log("Opción no válida, intente de nuevo.");  // Manejo de entrada inválida
            mostrarMenuPrincipal();
    }
}

function iniciarIngreso() {
    console.log("Seleccione el tipo de animal:");
    console.log("1. Mamífero");
    console.log("2. Ave");
    console.log("3. Reptil\n");

    rl.question('Opción: ', tipo => {
        rl.question('Ingrese nombre del animal: ', nombre => {
            rl.question('Ingrese edad del animal: ', edad => {
                let animal = zoo.crearAnimal(tipo, nombre, edad);
                if (animal) {
                    zoo.agregarAnimal(animal);
                    console.log('\nAnimal agregado correctamente.\n');
                }
                promptContinue();  // Preguntar si desea continuar
            });
        });
    });
}

function promptContinue() {
    rl.question("¿Desea realizar otra operación? (sí/no): ", answer => {
        if (answer.toLowerCase() === 'sí' || answer.toLowerCase() === 'si') {
            mostrarMenuPrincipal();
        } else {
            console.log("Saliendo del sistema del zoológico. ¡Hasta pronto!");
            rl.close();
        }
    });
}

mostrarMenuPrincipal();  // Llamada inicial al menú principal

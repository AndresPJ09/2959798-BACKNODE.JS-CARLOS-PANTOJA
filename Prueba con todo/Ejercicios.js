//CALLBACKS

/*
function verificarParImpar(numero, callback) {
    if (typeof numero !== 'number') {
        callback(new Error('El argumento debe ser un número'), null);
        return;
    }

    const esPar = numero % 2 === 0;
    callback(null, esPar);
}

verificarParImpar(2, (error, esPar) => {
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log(`El número es ${esPar ? 'par' : 'impar'}`);
    }
});
*/


////////////PROMISE///////////
/*
function verificarDisponibilidad(animal) {
    return new Promise((resolve, reject) => {
        // Simulamos una base de datos de animales disponibles
        const animalesDisponibles = ['elefante', 'jirafa', 'tigre', 'pingüino', 'oso'];

        setTimeout(() => {
            if (animalesDisponibles.includes(animal)) {
                resolve(`¡El ${animal} está disponible para ser visto hoy!`);
            } else {
                reject(new Error(`Lo sentimos, el ${animal} no está disponible para ser visto hoy.`));
            }
        }, 3000);
    });
}

// Uso de la función
verificarDisponibilidad('pingüino')
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error.message));

verificarDisponibilidad('león')
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error.message));
*/

////////////////ASYNC AWAIT///////////
/*
// Simula una base de datos de productos con sus cantidades
const stock = {
    'manzanas': 10,
    'naranjas': 0,
    'platanos': 5
};

// Función que verifica stock utilizando callback
function verificarStock(producto, callback) {
    setTimeout(() => {
        if (producto in stock) {
            callback(null, stock[producto]); // No hay error, devolvemos la cantidad
        } else {
            callback(new Error('Producto no encontrado'), null);
        }
    }, 1000); // Simulamos un retraso de 1 segundo
}

// Función async que utiliza Promise para manejar el callback de verificarStock
async function revisarStock(producto) {
    try {
        const cantidad = await new Promise((resolve, reject) => {
            verificarStock(producto, (error, cantidad) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(cantidad);
                }
            });
        });
        console.log(`Cantidad de ${producto}: ${cantidad}`);
        if (cantidad > 0) {
            console.log('Producto disponible.');
        } else {
            console.log('Producto agotado.');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Ejecución de la función para verificar el stock
revisarStock('manzanas');
revisarStock('naranjas');
revisarStock('peras'); 
*/

// CALLBACK ANIDADO

/*
function operacionAsincrona(callback) {
    setTimeout(() => {
        const resultado = "Resultado de la operación asíncrona";
        callback(null, resultado);
    }, 2000); // Simulamos un retraso de 2 segundos
}

// Llamada a la primera operación asíncrona
operacionAsincrona((error, resultado1) => {
    if (error) {
        console.error("Error en la operación 1:", error);
        return;
    }
    console.log("Resultado 1:", resultado1);

    // Llamada a la segunda operación asíncrona
    operacionAsincrona((error, resultado2) => {
        if (error) {
            console.error("Error en la operación 2:", error);
            return;
        }
        console.log("Resultado 2:", resultado2);

        // Llamada a la tercera operación asíncrona
        operacionAsincrona((error, resultado3) => {
            if (error) {
                console.error("Error en la operación 3:", error);
                return;
            }
            console.log("Resultado 3:", resultado3);
        });
    });
});
*/
// PROMESA ENCADENADA
/*
function cargarUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ id: 1, nombre: 'Juan' }), 1000);
    });
}

function cargarMensajes(usuarioId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(['El id de juan', 'El nombre de juan']), 1000);
    });
}

cargarUsuario()
    .then(usuario => {
        console.log('Usuario cargado:', usuario);
        return cargarMensajes(usuario.id);
    })
    .then(mensajes => {
        console.log('Mensajes cargados:', mensajes);
    })
    .catch(error => {
        console.error('Error:', error);
    });
*/

// ASYNC AWAIT MANEJO DE ERRORES

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function obtenerTemperatura(temperaturaInput) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof temperaturaInput !== 'number') {
                reject(new Error("La entrada debe ser un número."));
            } else {
                resolve(temperaturaInput);
            }
        }, 4000);  
    });
}


async function verificarTemperatura() {
    rl.question("Por favor, ingrese la temperatura en grados Celsius: ", async (input) => {
        try {
            const temperatura = await obtenerTemperatura(Number(input));

            setTimeout(() => { // Agregamos un retardo antes de mostrar los resultados
                console.log(`La temperatura actual del sistema es ${temperatura}°C.`);
                if (temperatura > 50) {
                    console.warn('Advertencia: La temperatura del sistema es demasiado alta.');
                } else {
                    console.log('La temperatura está dentro de un rango seguro.');
                }
                rl.close();
            }, 3000);
            
        } catch (error) {
            console.error('Error:', error.message);
            rl.close(); // Asegúrate de cerrar el readline interface incluso si hay un error.
        }
    });
}


verificarTemperatura();

// Función para verificar si un número es par o impar
function verificarParImpar(numero, callback) {
    if (typeof numero !== 'number') {
        callback(new Error('El argumento debe ser un número'), null);
        return;
    }

    const espar = numero % 2 === 0;
    callback(null, espar);
}

// Ejemplo de uso
verificarParImpar(8, (error, esPar) => {
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log(`El número 8 es ${esPar ? 'par' : 'impar'}`);
    }
});

// Función callback para manejar el resultado de la operación asíncrona
function operacionAsincrona(error, resultado) {
  if (error) {
    console.error('Error en la operación asíncrona:', error);
    return;
  }

  console.log('Resultado de la operación asíncrona:', resultado);
}

// Simular una operación asíncrona con setTimeout
console.log('Iniciando operación asíncrona...');
setTimeout(() => {
  const error = null; // Puedes asignar un valor de error si es necesario
  const resultado = 'Operación completada';
  operacionAsincrona(error, resultado);
}, 2000);
console.log('Esta línea se ejecuta antes de que se complete la operación asíncrona.');
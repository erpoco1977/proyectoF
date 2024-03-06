const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let acumulado = 0;

const eleccionOperacion = (numero) => {
    rl.question('Ingrese operacion, suma (s), resta(r), multiplicacion(m), division(d)', (respuesta) => {
        respuesta = respuesta.toLowerCase();
        if(respuesta === 's' || respuesta === 'suma' || respuesta ==='+') {
            acumulado = acumulado + numero;
            console.log(`Acumulado actual: ${acumulado}`);
          inicio();
        }else if(respuesta === 'r' || respuesta === 'resta' || respuesta === '-') {
            acumulado = acumulado - numero;
            console.log(`Acumulado actual: ${acumulado}`);
            inicio();
        }else if(respuesta === 'm' || respuesta === 'multipliaccion' || respuesta === '*') {
            acumulado = acumulado * numero;
            console.log(`Acumulado actual: ${acumulado}`);
            inicio();
        }else if(respuesta === 'd' || respuesta === 'division'|| respuesta === '/') {
            acumulado = acumulado / numero;
            console.log(`Acumulado actual: ${acumulado}`);
            inicio();
z        }else{
            console.log ("Por favor introduzca una operacion valida");
            eleccionOperacion(numero);
        }           
    });
  };

const inicio = () => {
    rl.question("Ingrese tu primer numero: ", (respuesta) => {
      const numero = parseFloat(respuesta);
      if (!isNaN(numero)) {
          eleccionOperacion(numero);
      } else {
        console.log('Por favor, ingrese un número válido.');
        inicio(); 
      }
    });
  };

console.log('Este programa suma, multipla, resta o divide infinitamente los números ingresados.');

inicio();










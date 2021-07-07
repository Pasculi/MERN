/*2.	Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.
suma = 0;*/
var sum = 0

function sumaPares() {
    console.log("La suma de todos los números pares del 1 al 1000: ");
    for (var i = 1; i <= 1000; i++) {

        if (i % 2 === 0) {
            sum = sum + i;
        }
    }
    return sum;
}
var y = sumaPares()
console.log("La suma total de números pares es: " + y);
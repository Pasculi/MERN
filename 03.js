/*3.	Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej.: 1+3+5+...+4997+4999).
suma = 0;*/
var sum = 0;

function sumImpares() {
    console.log("La suma de todos los números impares entre 1 y 5000");
    for (var i = 0; i <= 5000; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
var y = sumImpares();
console.log("El Total es: " + y);
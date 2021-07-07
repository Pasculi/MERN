/*7.	Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej.: [1,3,5, ..., 47,49]). Pista: Usa el método ‘push’.*/


function imparesArray() {
    var arr = [];
    for (var i = 0; i <= 50; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }

    }
    return arr;

}
var y = imparesArray();
console.log("Este es el array de numeros impares del 1 al 50: ");
console.log("arr = [" + y + "]");
/*6. Encuentra el promedio(avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores(ej.: para[1, 3, 5, 7, 20] el promedio es 7.2).*/

var arr = [1, 3, 5, 7, 20];


function avg(arr) {
    console.log("El arreglo es: " + arr);
    var avg = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}
var y = avg(arr);
console.log("El promedio del arreglo es: " + y);
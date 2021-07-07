/*5.	Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej.: para [-3,3,5,7] el número mayor (max) es 7).*/

var arr = [-3, 3, 5, 7];

function numMayor(arr) {
    console.log("El arreglo es: " + arr);
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
var y = numMayor(arr);
console.log("El numero mayor es: " + y);
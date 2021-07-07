/*9.	Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej.: [1,5,10,-2] será [1,25,100,4]). */
var arr = [1, 5, 10, -2];
var nuevo = [];
var temp = 0;

function cuadradoArray() {
    for (var i = 0; i < arr.length; i++) {
        temp = arr[i] * arr[i];
        nuevo.push(temp);
    }
    return arr;
}
var y = cuadradoArray(arr);

console.log("El resultado del Array [" + arr + "] al cuadrado es: [" + nuevo + "]");
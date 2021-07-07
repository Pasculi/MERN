/*10.	Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej.: [1,5,10,-2] se convertirá en [1,5,10,0]).*/
var arr = [1, -5, 10, -2];

function negativosArray() {
    console.log("El arreglo es : arr = [" + arr + "]");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr
}
var y = negativosArray(arr);
console.log("Este es el arreglo sin negativos reemplazados por 0: arr = [" + y + "]");
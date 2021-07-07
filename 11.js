/*11.	Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej.: [1,5,10,-2] devolverá [10,-2,3.5]). */
var arr = [1, 5, 10, -2];
var arrnew = [];
var mayor = 0;
var menor = 0;
var promedio = 0;
var suma = 0;

function maxminAvg(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (mayor < arr[i]) {
            mayor = arr[i];
        }
    }
    //console.log(mayor);
    arrnew.push(mayor);
    for (var i = 0; i < arr.length; i++) {
        if (menor > arr[i]) {
            menor = arr[i];
        }
    }
    //console.log(menor);
    arrnew.push(menor);
    for (var i = 0; i < arr.length; i++) {
        suma = suma + arr[i];
    }
    promedio = suma / arr.length;
    //console.log(promedio);
    arrnew.push(promedio);
}
maxminAvg(arr);
console.log("El arreglo con el máximo, minimo y promedio es : [" + arrnew + "]");
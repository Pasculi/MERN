/*12.	Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej.: [1,5,10,-2] será [-2,5,10,1]).*/
var arr = [1, 5, 10, -2];

console.log("El arreglo inicial es: arr = [" + arr + "]");

function interValores(arr) {
    var temp = 0;
    temp = arr[0];;
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    console.log(arr);
    return arr;

}
var y = interValores(arr);
console.log("El arreglo cambiando el primero por el últomo y viceversa es arr = [" + y + "]");
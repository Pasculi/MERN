/*8.	Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). */
var arr = [1, 3, 5, 7];
var y = 3;
var nuevo = [];

function mayorY(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            nuevo.push(arr[i]);
        }
    }
}
var z = mayorY(arr);
console.log("Los números mayores a Y (3) son " + nuevo.length + " y estos son los números, nuevo = [" + nuevo + "]");



/**
**
**
*
var arr = [1, 3, 5, 7];
var y = 3;
var nuevo = [];

function mayorY(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count += 1;
        }
    }
    return count;
}
var z = mayorY(arr);
console.log("Los números mayores a Y (3) son " + nuevo.length + " y estos son los números, nuevo = [" + nuevo + "]");*/
/*1.	Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.*/
var arr = [];

function arr255() {
    for (var i = 1; i <= 255; i++) {
        //console.log("N° " + i);
        arr.push(i);
    }
    return arr;
}
var y = arr255();
console.log("El arreglo del 1 al 255: arr = [" + y + "]");
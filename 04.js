/*4. Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array(ej.: [1, 2, 5] retorna 8.[-5, 2, 5, 12] retorna 14).*/



function sumaArray() {
    let arr = [-5, 2, 5, 12];
    let sum = 0;
    console.log("El arreglo es: " + arr);
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let y = sumaArray();
console.log("La suma del arreglo " + y);
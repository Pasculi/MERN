/*1.	Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.*/
var arr = [];

function arr255() {
    for (var i = 1; i <= 255; i++) {
        //console.log("N° " + i);
        arr.push(i);
    }
    return arr;
}
arr255();

/*2.	Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.
suma = 0;*/
var sum = 0

function sumaPares() {

    for (var i = 1; i <= 1000; i++) {

        if (i % 2 === 0) {

            sum = sum + i;
            console.log("El número par es: " +
                i + ", y el subtotal hasta ahora: " + sum);
        }

    }
    return sum;
}
var y = sumaPares()
console.log("La suma total de números pares es: " + y);
/*3.	Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej.: 1+3+5+...+4997+4999).
suma = 0;*/
var sum = 0;

function sumImpares() {
    for (var i = 0; i <= 5000; i++) {
        if (i % 2 !== 0) {
            sum += i;
            console.log("El numero impar es :" + i + ", y el subtotal hasta ahora es :" + sum);
        }
    }
    return sum;
}
var y = sumImpares();
console.log("El Total es: " + y);

/*4. Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array(ej.: [1, 2, 5] retorna 8.[-5, 2, 5, 12] retorna 14).*/
var arr = [-5, 2, 5, 12];

function sumaArray() {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log(arr[i] + " + ");
    }
    return sum;
}
var y = sumaArray();
console.log("= " + y);

/*5.	Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej.: para [-3,3,5,7] el número mayor (max) es 7).*/

var arr = [-3, 3, 5, 7];

function numMayor(arr) {
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

/*6. Encuentra el promedio(avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores(ej.: para[1, 3, 5, 7, 20] el promedio es 7.2).*/

var arr = [1, 3, 5, 7, 20];


function avg(arr) {
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
console.log("arr = [" + arr + "]");

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
    nuevo.push(mayor);
    for (var i = 0; i < arr.length; i++) {
        if (menor > arr[i]) {
            menor = arr[i];
        }
    }
    //console.log(menor);
    nuevo.push(menor);
    for (var i = 0; i < arr.length; i++) {
        suma = suma + arr[i];
    }
    promedio = suma / arr.length;
    //console.log(promedio);
    nuevo.push(promedio);
}
maxminAvg(arr);
console.log("El arreglo con el máximo, minimo y promedio es : [" + nuevo + "]");

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

/*13.	De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’, ‘Dojo’,2]. */
var arr = [-1, -3, 2];

function numString(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
var y = numString(arr);
console.log(y);
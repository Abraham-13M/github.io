// Pedimos dos números al usuario

let numero1 = Number(prompt("Introduce el primer número:"));

let numero2 = Number(prompt("Introduce el segundo número:"));


// Realizamos la suma

let suma = numero1 + numero2;


// Mostramos el resultado en la consola

console.log("La suma es:", suma);


// Mostramos también el resultado en la página

document.getElementById("resultado").innerHTML =
    "La suma de " + numero1 + " + " + numero2 + " es: " + suma;
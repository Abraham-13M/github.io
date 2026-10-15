// Declaramos el array
let numeros = [];

// Rellenamos el array con 100 números aleatorios
for (let i = 0; i < 100; i++) {

    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    numeros.push(numeroAleatorio);
}

// Mostramos el array con console.table
console.table(numeros);


// Creamos otro array para los números filtrados
let numerosFiltrados = [];

// Filtramos los números entre 40 y 60
for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] >= 40 && numeros[i] <= 60) {

        numerosFiltrados.push(numeros[i]);

    }
}

// Mostramos también los números filtrados
console.table(numerosFiltrados);


// Mostramos los resultados en la página
document.getElementById("todos").innerHTML =
    numeros.join(" - ");

document.getElementById("filtrados").innerHTML =
    numerosFiltrados.join(" - ");
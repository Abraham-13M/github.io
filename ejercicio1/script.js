// Variables de distintos tipos

let nombre = "Abraham";
let edad = 20;
let nota = 8.5;
let aprobado = true;
let datoNulo = null;
let datoSinDefinir;


// Mostramos los datos en la consola
// porque el ejercicio pide utilizar estos métodos

console.log("Nombre:", nombre, "- Tipo:", typeof nombre);

console.error("Edad:", edad, "- Tipo:", typeof edad);

console.info("Nota:", nota, "- Tipo:", typeof nota);

console.debug("Aprobado:", aprobado, "- Tipo:", typeof aprobado);

console.log("Dato nulo:", datoNulo, "- Tipo:", typeof datoNulo);

console.info(
    "Dato sin definir:",
    datoSinDefinir,
    "- Tipo:",
    typeof datoSinDefinir
);


// Mostramos también los resultados directamente en la página

let resultado = document.getElementById("resultado");

resultado.innerHTML =
    "<div class='variable'>Nombre: " + nombre +
    " | Tipo: " + typeof nombre + "</div>" +

    "<div class='variable'>Edad: " + edad +
    " | Tipo: " + typeof edad + "</div>" +

    "<div class='variable'>Nota: " + nota +
    " | Tipo: " + typeof nota + "</div>" +

    "<div class='variable'>Aprobado: " + aprobado +
    " | Tipo: " + typeof aprobado + "</div>" +

    "<div class='variable'>Dato nulo: " + datoNulo +
    " | Tipo: " + typeof datoNulo + "</div>" +

    "<div class='variable'>Dato sin definir: " + datoSinDefinir +
    " | Tipo: " + typeof datoSinDefinir + "</div>";
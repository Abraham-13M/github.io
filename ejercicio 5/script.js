let numero = Number(prompt("Introduce un número:"));

if (numero % 2 == 0) {
    console.log("El número " + numero + " es par");

    document.getElementById("resultado").textContent =
        "El número " + numero + " es par";
} else {
    console.log("El número " + numero + " es impar");

    document.getElementById("resultado").textContent =
        "El número " + numero + " es impar";
}
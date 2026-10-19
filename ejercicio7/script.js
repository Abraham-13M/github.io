function contarVocales(palabra) {

    let vocales = "aeiou";
    let contador = 0;

    palabra = palabra.toLowerCase();

    for (let i = 0; i < palabra.length; i++) {

        if (vocales.includes(palabra[i])) {

            contador++;

        }

    }

    return contador;
}


let boton = document.getElementById("contar");

boton.addEventListener("click", function () {

    let palabra = document.getElementById("palabra").value;

    let cantidad = contarVocales(palabra);

    document.getElementById("resultado").textContent =
        "La palabra " + palabra + " tiene " + cantidad + " vocales.";

    console.log(
        "La palabra " + palabra + " tiene " + cantidad + " vocales."
    );

});
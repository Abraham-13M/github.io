let boton = document.getElementById("comprobar");

boton.addEventListener("click", function () {

    let numero = Number(document.getElementById("numero").value);

    if (numero % 2 == 0) {

        document.getElementById("resultado").textContent =
            "El número " + numero + " es par";

        console.log("El número " + numero + " es par");

    } else {

        document.getElementById("resultado").textContent =
            "El número " + numero + " es impar";

        console.log("El número " + numero + " es impar");
    }

});
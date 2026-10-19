function azar(minimo, maximo) {

    let numero = Math.floor(
        Math.random() * (maximo - minimo + 1)
    ) + minimo;

    return numero;
}


let boton = document.getElementById("generar");

boton.addEventListener("click", function () {

    let numeroAleatorio = azar(-5, 10);

    document.getElementById("resultado").textContent =
        "Número generado: " + numeroAleatorio;

    console.log("Número generado:", numeroAleatorio);

});
// Declaramos un objeto persona con diferentes tipos de datos

let persona = {

    nombre: "Abraham",
    apellidos: "Galdón Fernández",

    edad: 20,

    altura: 1.75,

    estudiante: true,

    telefono: null,

    segundoNombre: undefined,

    aficiones: [
        "Videojuegos",
        "Deporte",
        "Programación"
    ],

    direccion: {
        localidad: "Granada",
        pais: "España",
        codigoPostal: 18000
    }
};


// Mostramos el objeto completo en la consola
console.log(persona);


// Mostramos el objeto en forma de tabla
console.table(persona);


// Mostramos también el array en forma de tabla
console.table(persona.aficiones);


// Mostramos el objeto dirección en forma de tabla
console.table(persona.direccion);


// Mostramos los datos en la página

let resultado = document.getElementById("resultado");

resultado.innerHTML =
    "<div class='dato'>Nombre: " + persona.nombre + "</div>" +
    "<div class='dato'>Apellidos: " + persona.apellidos + "</div>" +
    "<div class='dato'>Edad: " + persona.edad + "</div>" +
    "<div class='dato'>Altura: " + persona.altura + "</div>" +
    "<div class='dato'>Estudiante: " + persona.estudiante + "</div>" +
    "<div class='dato'>Teléfono: " + persona.telefono + "</div>" +
    "<div class='dato'>Segundo nombre: " + persona.segundoNombre + "</div>" +
    "<div class='dato'>Aficiones: " + persona.aficiones.join(", ") + "</div>" +
    "<div class='dato'>Dirección: " +
        persona.direccion.localidad + ", " +
        persona.direccion.pais +
    "</div>";
const alejandro = {
    nombre: "Alejandro",
    edad: 41,
    isDesarrollador: true,
    nacimiento: new Date("february 9 1981"),
    "libro-favorito": {
        titulo: "El principito",
        autor: "Exupery",
        fecha: "01/01/70",
        url: "www.url.com"
    }
}

console.log(alejandro.nombre, alejandro.edad, alejandro.isDesarrollador,
    alejandro.nacimiento, alejandro["libro-favorito"].titulo, alejandro["libro-favorito"].autor, 
    alejandro["libro-favorito"].fecha, alejandro["libro-favorito"].url);
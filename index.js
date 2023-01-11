var nombre = "Alejandro"
var apellido = "Turtola"

var yo = {
    nombre: `${nombre}`,
    apellido: `${apellido}`
} 

sessionStorage.setItem("yo", JSON.stringify(yo))
localStorage.setItem("yo", JSON.stringify(yo))

document.cookie = `${JSON.stringify(yo)} ;expires=` + new Date(2023, 0, 11, 00, 00, 02)


const datosPersonales = 
    { 
        nombre: "Alejandro",
        apellido: "Turtola",
        edad: 41,
        altura: 1.78,
        eresDesarrollador: true
    }

let miEdad = "edad";
console.log(datosPersonales[miEdad]);

const listaDatos = [
    datosPersonales,
    { nombre: "Guillermo", edad: 41 }, 
    { nombre: "Carlos", edad: 40 }
]

console.log(listaDatos);


const listaObjs = listaDatos.sort((a, b) => a.edad > b.edad);
console.log(listaObjs);

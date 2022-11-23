class Estudiante {
    nombre = "Alejandro";
    asignaturas = ["Javascript", "HTML", "CSS"];
    
    obtenDatos(){
        const objeto = {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
        return objeto;
    }
}

const nuevoEstudiante = new Estudiante();
console.log(nuevoEstudiante.obtenDatos());


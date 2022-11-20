function devuelveVerdadero(){
    return true;
}
console.log(devuelveVerdadero());


const miPromesa = new Promise((resolver, rechazar) => {
    const tiempoFuera = setTimeout(function(){console.log("Hola soy una promesa");}, 5000);
    if(true) {
         resolver();
    } else {
         rechazar();
    }
 })

 miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))


function* generaParesId() {
    let id = 0;
    while(true){
       id = id + 2;
       if (id % 2 === 0) {
        console.log(id);  
       }
       yield id;
    }    
}

const gen = generaParesId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
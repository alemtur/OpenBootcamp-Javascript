nombre = "Alejandro";
apellido = "Turtola";
estudiante = `${nombre} ${apellido}`
console.log(estudiante);

estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

numeroLetras = estudiante.length;
console.log(numeroLetras);

primerLetra = nombre[0];
console.log(primerLetra);

ultimaLetra = apellido.length;
console.log(ultimaLetra);
ultimaLetra = apellido[6];
console.log(ultimaLetra);

espacios = estudiante.trim().length;
console.log(espacios);

contieneNombre = estudiante.includes(nombre);
console.log(contieneNombre);

const fechaHoy = new Date();
console.log(fechaHoy);

const fechaNacimiento = new Date(1981, 1, 9);
console.log(fechaNacimiento);

const diferenciaFecha = fechaHoy.getTime() > fechaNacimiento.getTime();
console.log(diferenciaFecha);

const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

const anyoNacimiento = fechaNacimiento.getFullYear();
console.log(anyoNacimiento);
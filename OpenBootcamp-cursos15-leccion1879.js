const arrayCompra = ["Azucar", "Jabon", "Arroz", "Fideos", "Sal"];
arrayCompra.push("Aceite de Girasol");
arrayCompra.pop();

const listaPeliculas = [
    { titulo: "Black Hawk Down", director: "No se", fecha: "2004-01-01" },
    { titulo: "Top Gun: Maverick", director: "Tom Cruise", fecha: "2022-01-05" },
    { titulo: "Interceptor", director: "No se", fecha: "2022-02-08" }
];

const peliculasPosteriores = listaPeliculas.filter(pelicula => pelicula.fecha > "2010-01-01");

const listaDirectores = listaPeliculas.map(directores => directores.director);

const listaTitulos = listaPeliculas.map(titulos => titulos.titulo);

const listaDirectoresTitulos = listaDirectores.concat(listaTitulos);

const listaDirectoresTitulosProp = [...listaDirectores, ...listaTitulos];


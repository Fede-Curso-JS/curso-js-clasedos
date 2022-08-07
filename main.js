// NOMBRE
let nombre = prompt('Ingresá tu nombre');
// APELLIDO
let apellido = prompt('Ingresá tu apellido');
// EDAD
let edad = prompt('¿Cuál es tu edad?');
// PAIS
let pais = prompt('¿De qué país sos?');
// AÑOS A FUTURO
let cuantosAñosTendre = prompt('¿Querés saber cuantos años tendrás dentro de: ?');

// RESULTADO
alert(`
Datos y curiosidad sobre vos 🤭

Nombre: ${nombre}.
Apellido: ${apellido}.
Edad: ${edad} años.
País: ${pais}.
Dentro de ${cuantosAñosTendre} años vas a tener ${parseFloat(edad) + parseFloat(cuantosAñosTendre)} años✨`);

console.log(`
Datos y curiosidad sobre vos 🤭

Nombre: ${nombre}.
Apellido: ${apellido}.
Edad: ${edad} años.
País: ${pais}.
Dentro de ${cuantosAñosTendre} años vas a tener ${parseFloat(edad) + parseFloat(cuantosAñosTendre)} años✨`);
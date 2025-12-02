const nombre = prompt("Ingrese su nombre:");
const apellido = prompt("Ingrese su apellido:");

const inicialNombre = nombre.trim().slice(0, 1).toLowerCase();
const inicialApellido = apellido.trim().slice(0, 3).toLowerCase();

const numeroRamdom = Math.floor(Math.random() * 90) + 10;

const nombreUsuario = inicialNombre + inicialApellido + numeroRamdom;

console.log("Tu nuevo nombre de usuario es: " + nombreUsuario);

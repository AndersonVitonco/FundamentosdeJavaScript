//zona = "popayan"
//*sena = "adso"
let zona = "Popayán";
let sena = "ADSO";

console.log("sena");
console.log("Comercio");
console.log("  *   ");
console.log("  **   ");
console.log("  ***   ");
console.log("  ****   ");

// Variables
var nombre = "Juan David";
let casa = "ropa";
const p1 = 3.1416;

let cajadeanderson = "carro";
console.log(cajadeanderson);

/*errores de sintasis
let nombre1 = "Anderson";
let c = "2562";
let caja_de_anderson2 = "moto";
let cda = "Matriz";
*/

// lo que si se puede
let caja_de_anderson = "casa";
let cajadeanderson1 = "moto";
let IDUsuario = 12345;
let id_usuario = 12345;
console.log(nombre); // corregido: usar variable existente
console.log(caja_de_anderson);
console.log(IDUsuario);
console.log(id_usuario);

// operadores
let suma = 8 + 2;
let resta = 10 - 5;
let multiplicacion = 5 * 3;
let division = 10 / 2;
let modulo = 10 % 3;
let exponencial = 2 ** 3;
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Modulo:", modulo);
console.log("Exponencial:", exponencial);

// object
const aprendiz = {
    nombre: "Anderson",
    edad: 18,
    ciudad: "Popayán",
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}.`);
    }
};
console.log(aprendiz.nombre);
console.log(aprendiz.edad);
console.log(aprendiz.ciudad);
aprendiz.saludar();

// Array
const nombreEquipo = "Solo Sena";

const equipoColombia = [
    { nombre: "Catalina Ramirez", edad: 24, sexo: "Femenino" },
    { nombre: "Mariana Lopez", edad: 22, sexo: "Femenino" },
    { nombre: "Valentina Torres", edad: 27, sexo: "Femenino" },
    { nombre: "Juan David Tombe", edad: 26, sexo: "Masculino" },
    { nombre: "Kevin Millan", edad: 28, sexo: "Masculino" },
    { nombre: "Santiago Velasco", edad: 23, sexo: "Masculino" }
];
    console.log("\nEl nombre del equipo es:", nombreEquipo);
    console.log("\nMiembros del equipo:");
    equipoColombia.forEach((miembro, i) => {
    console.log(`${i + 1}. ${miembro.nombre} - ${miembro.edad} años - ${miembro.sexo}`);
});
    console.log("\nLos nombres del equipo son:", equipoColombia.map(m => m.nombre).join(", "));
    const lugarJuego = "Canchas del INEM";
    equipoColombia.forEach(miembro => miembro.lugar = lugarJuego);
    console.log(`\nEl nombre del equipo es: ${nombreEquipo}`);
    console.log(`Van a jugar en: ${lugarJuego}`);
    console.log("\nMiembros del equipo y dónde jugarán:");
    equipoColombia.forEach((miembro, i) => {
    console.log(`${i + 1}. ${miembro.nombre} - ${miembro.edad} años - ${miembro.sexo} - Lugar: ${miembro.lugar}`);
});
// arreglos
let frutas = ["manzana", "banana", "cereza", "durazno"];
console.log("Frutas:", frutas);
console.log("Primera fruta:", frutas[2]);

let numeros = [10, 20, 30, 40, 50];// resultado 4

let aprendices = {andres, johan, juan, kevin, santiago}; //resultado 5

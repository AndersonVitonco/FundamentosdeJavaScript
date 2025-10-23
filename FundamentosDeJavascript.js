// Fundamentos de JavaScript Tarea
/*. Ejercicios básicos (20 – 30 min)Realiza estos ejercicios directamente en la consolaVariables y operaciones*/
let a = 10;
let b = 3;
console.log("Suma:", 5 + 8)
console.log("Resta:", 6 - 1)
console.log("Multiplicación:", 8 * 5)
console.log("División:", 30 / 15)
console.log("Módulo:", 100 % 2)

//Ejercicios y retos

// Ejercicios basicos (variables y operaciones)
a = 10;
b = 3;
console.log("\nEjercicios básicos:");
console.log("Suma:", 7 + 8);
console.log("Resta:", 6 - 2);
console.log("Multiplicación:", 8 * 10);
console.log("División:", 30 / 15);
console.log("Módulo:", 100 % 2);

// Tipos de datos
const nombreTipo = "Laura";
const edadTipo = 25;
const activo = true;
console.log("\nTipos de datos:");
console.log(typeof nombreTipo);
console.log(typeof edadTipo);
console.log(typeof activo);

// Arreglos
const frutasEj = ["Manzana", "Banano", "Pera"];
frutasEj.push("Fresa");
console.log("\nArreglos:");
console.log(frutasEj);
console.log("Cantidad:", frutasEj.length);

// Funcion basica
function multiplicar(x, y) {
    return x * y;
}
console.log("\nFunción multiplicar:");
console.log("multiplicar(4,5) =", multiplicar(4, 5));

// Retos::

// Reto 1:
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
function ask(question) { return new Promise(resolve => readline.question(question, ans => resolve(ans))); }

async function calculadoraInteractiva() {
    console.log("\nReto 1 — Calculadora básica:");
    const n1 = parseFloat(await ask("Número 1: "));
    const op = (await ask("Operación (+ - * /): ")).trim();
    const n2 = parseFloat(await ask("Número 2: "));
    let res;
    switch (op) {
        case '+': res = n1 + n2; break;
        case '-': res = n1 - n2; break;
        case '*': res = n1 * n2; break;
        case '/': res = (n2 !== 0) ? n1 / n2 : "Error: división por cero"; break;
        default: res = "Operación no válida";
    }
    console.log("Resultado:", res);
}

// Reto 2:
function promedio(calificaciones) {
    const suma = calificaciones.reduce((s, v) => s + v, 0);
    return suma / calificaciones.length;
}
const notas = [4.5, 5, 3.7, 4, 4.8];
console.log("\nReto 2 — Promedio de notas:");
console.log("Notas:", notas);
console.log("Promedio:", promedio(notas).toFixed(2));

// Reto 3:
const estudiante = {
    nombre: "Laura Gómez",
    edad: 25,
    materias: ["Matemáticas", "Física", "Programación"],
    mostrarInfo() {
        console.log("\nReto 3 — Gestor de estudiantes:");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Materias: ${this.materias.join(", ")}`);
    }
};
estudiante.mostrarInfo();

// Reto 4
function mayorYmenor(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return { mayor: null, menor: null };
    let mayor = arr[0], menor = arr[0];
    for (const n of arr) {
        if (n > mayor) mayor = n;
        if (n < menor) menor = n;
    }
    return { mayor, menor };
}

// Reto 5
async function ingresoDatosUsuario() {
    console.log("\nReto 5 — Ingreso de datos:");
    const nombre = await ask("Nombre: ");
    const edad = parseInt(await ask("Edad: "), 10);
    const telefono = await ask("Teléfono: ");
    const peso = parseFloat(await ask("Peso (kg): "));

    console.log("\nDatos ingresados:");
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${isNaN(edad) ? "No válido" : edad}`);
    console.log(`Teléfono: ${telefono}`);
    console.log(`Peso: ${isNaN(peso) ? "No válido" : peso + " kg"}`);
}

async function main() {

    console.log("\nReto 4 — Mayor y menor:");
    const ejemplo = [3, 7, 1, 9, 5];
    const resultado = mayorYmenor(ejemplo);
    console.log("Arreglo:", ejemplo);
    console.log(`Mayor: ${resultado.mayor}, Menor: ${resultado.menor}`);

    await calculadoraInteractiva();
    await ingresoDatosUsuario();

    readline.close();
}

main();
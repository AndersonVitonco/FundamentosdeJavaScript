// Ejercisios de conversion implicita

//Ejercicio 1: 
let a = "10" + 5;
alert(a);
alert(typeof a);
//Ejercicio 2: 
let b1 = "20" - 5;
let c = "10" * "2";
let d = "50" / "5";
alert(b1);
alert(c);
alert(d);

//Ejercicio 3: 
alert(5 == "5");    // true
alert(5 === "5");   // false
alert(false == 0);  // true
alert(false === 0); // false

//Ejercicio 4:
let x = "123";
let y = "45.6";
let z = "Hola";
alert(Number(x));      // 123
alert(parseInt(y));
alert(parseFloat(y));
alert(Number(z));      // NaN

//Ejercicio 5:
let num = 250;
alert(String(num));     // "250"
alert(num.toString());  // "250"
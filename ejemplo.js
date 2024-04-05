//let permite darle valor a una variable luego de su inicializacion

//const Se utiliza para crear una variable que no puede ser cambiada luego de su inicializacion

//var este es un tipo de variable, su uso no es muy recomendable actualmente

let nombre = "Fran";
console.log("nombre: ", nombre);

//const edad = 20;

// ? es una cadena de caracteres
const saludo = "hola";
const despedida = "Adios";
const frase = `${saludo}, como estan?`;
console.log(frase);

// ? Booleano 

let esVerdadero = true;
let esFalso = false;

console.log(esVerdadero)
console.log(esFalso)
//? null

let edad1 = null;
console.log(edad1);

//undefined 
let edad;
console.log(edad);

// tipo de dato no primitivos
//objet : los objetos  son colecciones de pares clave valor

let estudiante ={
    nombre:"Fran",
    edad: 20 ,
    carrera: "IECI",
    universidad: "UBB"
}
console.log(estudiante.nombre);
console.log(estudiante.edad);
//typeof para saber que tipo de variable es
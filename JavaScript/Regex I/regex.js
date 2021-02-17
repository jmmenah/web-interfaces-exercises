// Juan Manuel Mena Hernandez
const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

// Ejercicio 01
// Utilizando expresiones regulares, devuelve las palabras de 3 letras del string ex1.
ex1.match(/\b[A-Za-z]{3}\b/gm);




// Ejercicio 02
// Utilizando expresiones regulares, elimina todos los numeros de la cadena ex2.
ex2.replace(/[0-9]/g,'');




// Ejercicio 03
// Utilizando expresiones regulares, encuentra el valor de la cadena ex3
ex3.match(/[0-9]+[.][0-9]{2}/gm);




// Ejercicio 04
// Utilizando expresiones regulares, encuentra el numero de telefono de la cadena ex4
ex4.match(/\d{4}[ ]\d{3}[ ]\d{3}/gm);





// Ejercicio 05
// Utilizando expresiones regulares, devuelve la direccion de correo que esta en la cadena ex5
ex5.match(/\w+[@]\w+.\w+/gm);

// Arreglo 1: números del 1 al 5
const numeros = [1, 2, 3, 4, 5];

// .reduce() - Calcula la suma de todos los números en el arreglo
const sumaNumeros = numeros.reduce((acc, curr) => acc + curr, 0);
console.log('Suma de números:', sumaNumeros);

// .forEach() - Imprime cada número en el arreglo
console.log('Impresión de números:');
numeros.forEach(num => console.log(num));

// .filter() - Filtra los números pares del arreglo
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log('Números pares:', numerosPares);

// .map() - Crea un nuevo arreglo con los cuadrados de los números
const cuadrados = numeros.map(num => num * num);
console.log('Cuadrados de números:', cuadrados);


// Arreglo 2: nombres de personas
const nombres = ['Ana', 'Luis', 'Pedro', 'Juan', 'María'];

// .reduce() - Concadena todos los nombres en una sola cadena
const concatenarNombres = nombres.reduce((acc, curr) => acc + ' ' + curr);
console.log('Nombres concatenados:', concatenarNombres);

// .forEach() - Imprime cada nombre en el arreglo
console.log('Impresión de nombres:');
nombres.forEach(nombre => console.log(nombre));

// .filter() - Filtra nombres que contienen la letra 'a'
const nombresConA = nombres.filter(nombre => nombre.includes('a'));
console.log('Nombres que contienen "a":', nombresConA);

// .map() - Convierte todos los nombres a mayúsculas
const nombresEnMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log('Nombres en mayúsculas:', nombresEnMayusculas);


// Arreglo 3: edades
const edades = [15, 22, 19, 34, 27];

// .reduce() - Calcula la suma de todas las edades
const edadTotal = edades.reduce((acc, curr) => acc + curr, 0);
console.log('Suma de edades:', edadTotal);

// .forEach() - Imprime cada edad en el arreglo
console.log('Impresión de edades:');
edades.forEach(edad => console.log(edad));

// .filter() - Filtra edades mayores de 20
const edadesMayoresDe20 = edades.filter(edad => edad > 20);
console.log('Edades mayores de 20:', edadesMayoresDe20);

// .map() - Convierte las edades a meses (edad * 12)
const edadesEnMeses = edades.map(edad => edad * 12);
console.log('Edades en meses:', edadesEnMeses);


// Arreglo 4: precios
const precios = [100, 200, 150, 50, 75];

// .reduce() - Calcula el total de todos los precios
const totalPrecios = precios.reduce((acc, curr) => acc + curr, 0);
console.log('Total de precios:', totalPrecios);

// .forEach() - Imprime cada precio en el arreglo
console.log('Impresión de precios:');
precios.forEach(precio => console.log(precio));

// .filter() - Filtra precios mayores a 100
const preciosAltos = precios.filter(precio => precio > 100);
console.log('Precios mayores a 100:', preciosAltos);

// .map() - Aplica un descuento del 10% a cada precio
const preciosConDescuento = precios.map(precio => precio * 0.9);
console.log('Precios con descuento del 10%:', preciosConDescuento);


// Arreglo 5: letras
const letras = ['a', 'b', 'c', 'd', 'e'];

// .reduce() - Concadena todas las letras en una sola cadena
const concatenarLetras = letras.reduce((acc, curr) => acc + curr);
console.log('Letras concatenadas:', concatenarLetras);

// .forEach() - Imprime cada letra en el arreglo
console.log('Impresión de letras:');
letras.forEach(letra => console.log(letra));

// .filter() - Filtra las letras que son vocales
const letrasVocales = letras.filter(letra => 'aeiou'.includes(letra));
console.log('Vocales:', letrasVocales);

// .map() - Convierte cada letra a su código ASCII
const letrasEnCodigoAscii = letras.map(letra => letra.charCodeAt(0));
console.log('Código ASCII de letras:', letrasEnCodigoAscii);

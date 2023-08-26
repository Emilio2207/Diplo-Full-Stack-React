var numeros = [100, 56, 1245, 3, 89, 9];

var mayor = 0;

for (var i = 0; i < numeros.length; i++) {
if (numeros[i] > mayor) {
mayor = numeros[i];
}
}

console.log('el mayor de ' + numeros + ' es ' + mayor);
document.write('el mayor de ' + numeros + ' es ' + mayor);
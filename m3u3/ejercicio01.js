const metros = prompt('Ingrese los metros:', '');
let transporte = '';

if (metros > 0 && metros <= 1000) {
    transporte = 'pie';
} else if (metros > 1000 && metros <= 10000) {
    transporte = 'bicicleta';
} else if (metros > 10000 && metros <= 30000) {
    transporte = 'colectivo';
} else if (metros > 30000 && metros <= 100000) {
    transporte = 'auto';
} else if (metros > 100000) {
    transporte = 'avion';
}

console.log(`Para ${metros} metros recomendamos ir en ${transporte}`);
document.write(`Para ${metros} metros recomendamos ir en ${transporte}`);
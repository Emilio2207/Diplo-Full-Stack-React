// Array de alumnos con sus notas
var alumnos = [
    { nombre: "Juan Gomez", nota: 7 },
    { nombre: "Pedro Rodriguez", nota: 4 },
    { nombre: "Roxana Garcia", nota: 8 },
    { nombre: "Luciano Lopez", nota: 5 },
    { nombre: "Fernanda Gimenez", nota: 6 },
    { nombre: "Florencia Martinez", nota: 10 },
    { nombre: "Raul Sanchez", nota: 7 },
    { nombre: "Sandra Figueroa", nota: 8 },
];

// Función para filtrar los alumnos aprobados
function filtrarAprobados(alumnos) {
    return alumnos.filter(alumno => alumno.nota >= 7);
}

// Obtener la lista de alumnos aprobados
var alumnosAprobados = filtrarAprobados(alumnos);

// Mostrar los alumnos aprobados en la lista
var listaAlumnos = document.getElementById("listaAlumnos");
alumnosAprobados.forEach(alumno => {
    var listItem = document.createElement("li");
    listItem.textContent = `${alumno.nombre} - Nota: ${alumno.nota}`;
    listaAlumnos.appendChild(listItem);
});
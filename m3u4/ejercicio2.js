// Obtener el elemento del textarea y el contador
const textarea = document.getElementById("miTextarea");
const contadorCaracteres = document.getElementById("contadorCaracteres");

// Agregar un evento de entrada para contar los caracteres
textarea.addEventListener("input", actualizarContador);

// Función para contar caracteres y actualizar el contador
function actualizarContador() {
    const texto = textarea.value;
    const numeroCaracteres = texto.length;
    contadorCaracteres.textContent = numeroCaracteres + " caracteres";
}

// Llamar a la función inicialmente para mostrar el contador inicial
actualizarContador();


const boton = document.getElementById("botonSaludar");

boton.addEventListener("click", function(event) {
    event.stopPropagation(); // Evita que ocurra otros eventos
    Hola(); 
});
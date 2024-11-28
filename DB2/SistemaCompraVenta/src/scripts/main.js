// Cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log("La plataforma de compraventa está lista.");
    
    // Inicializar la vista predeterminada (Inicio)
    mostrarVista("inicio");
});

// Función para mostrar una vista específica
const mostrarVista = (vista) => {
    // Oculta todas las vistas
    document.querySelectorAll(".vista").forEach((elemento) => {
        elemento.style.display = "none";
    });

    // Muestra la vista seleccionada
    const vistaSeleccionada = document.getElementById(`vista-${vista}`);
    if (vistaSeleccionada) {
        vistaSeleccionada.style.display = "block";
        
        // Renderiza contenido si es necesario
        if (vista === "productos") {
            renderProductos(); // Asegúrate de que esta función esté definida en productos.js
        } else if (vista === "carrito") {
            renderCarrito(); // Asegúrate de que esta función esté definida en carrito.js
        }
    }
};
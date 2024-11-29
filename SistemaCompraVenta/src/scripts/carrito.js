// Inicializa el carrito desde LocalStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Renderizar carrito
const renderCarrito = () => {
   const contenedor = document.getElementById("carrito");
   const totalElemento = document.getElementById("total");
   contenedor.innerHTML = ""; // Limpiar contenido previo

   let total = 0;
   carrito.forEach((producto, index) => {
       total += producto.precio;

       const item = document.createElement("li");
       item.className = "list-group-item d-flex justify-content-between align-items-center";

       item.innerHTML = `
           <span>${producto.nombre} - $${producto.precio.toFixed(2)}</span>
           <button class='btn btn-danger btn-sm' onclick='eliminarDelCarrito(${index})'>Eliminar</button>`;
       
       contenedor.appendChild(item);
   });

   totalElemento.textContent = total.toFixed(2); // Actualizar total
};

// Actualizar carrito
const actualizarCarrito = (producto) => {
   carrito.push(producto);
   localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar en LocalStorage
};

// Eliminar producto del carrito
const eliminarDelCarrito = (index) => {
   carrito.splice(index, 1); // Eliminar del array
   localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizar LocalStorage
   renderCarrito(); // Actualizar la vista
};

// Renderizar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", () => {
   renderCarrito(); // Siempre mostrar los datos iniciales del carrito
});
// Datos de ejemplo de productos con imágenes en formato PNG
const productos = [
    { id: 1, nombre: "Producto A", precio: 100, descripcion: "Descripción del producto A", stock: 10, imagen: "./assets/images/productoA.png" },
    { id: 2, nombre: "Producto B", precio: 200, descripcion: "Descripción del producto B", stock: 5, imagen: "./assets/images/productoB.png" },
    { id: 3, nombre: "Producto C", precio: 300, descripcion: "Descripción del producto C", stock: 8, imagen: "./assets/images/productoC.png" },
    { id: 4, nombre: "Producto D", precio: 150, descripcion: "Descripción del producto D", stock: 12, imagen: "./assets/images/productoD.png" },
    { id: 5, nombre: "Producto E", precio: 250, descripcion: "Descripción del producto E", stock: 0, imagen: "./assets/images/productoE.png" }, // Sin stock
    { id: 6, nombre: "Producto F", precio: 180, descripcion: "Descripción del producto F", stock: 7, imagen:"./assets/images/productoF.png"},
    { id :7,nombre:"Producto G",precio :220 ,descripcion:"Descripción del Producto G ",stock :3 ,imagen:"./assets/images/productoG.png"},
    { id :8,nombre:"Producto H ",precio :90 ,descripcion:"Descripción del Producto H ",stock :15 ,imagen:"./assets/images/productoH.png"}
 ];
 
 // Renderizar productos con imágenes
 const renderProductos = () => {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = ""; // Limpiar contenido previo
 
    productos.forEach((producto) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "col-md-4 mb-4";
 
        tarjeta.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text"><strong>Precio: $${producto.precio.toFixed(2)}</strong></p>
                    <p class="card-text">Stock: ${producto.stock}</p>
                    <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})" ${producto.stock === 0 ? 'disabled' : ''}>Agregar al carrito</button>
                </div>
            </div>`;
        contenedor.appendChild(tarjeta);
    });
 };
 
 // Función para agregar productos al carrito
 const agregarAlCarrito = (idProducto) => {
    const producto = productos.find((p) => p.id === idProducto);
    if (producto && producto.stock > 0) {
        producto.stock--; // Reducir el stock
        actualizarCarrito(producto); // Agregar al carrito
        renderProductos(); // Actualizar la vista de productos
    } else {
        alert("Producto no disponible.");
    }
 };
 
 // Llama a esta función cuando necesites renderizar los productos (por ejemplo, al cargar la vista de productos)
 document.addEventListener('DOMContentLoaded', renderProductos);
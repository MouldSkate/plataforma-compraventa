// Datos de ejemplo de productos
const productos = [
    { id: 1, nombre: "Producto A", precio: 100, descripcion: "Descripción del producto A", stock: 10 },
    { id: 2, nombre: "Producto B", precio: 200, descripcion: "Descripción del producto B", stock: 5 },
    { id: 3, nombre: "Producto C", precio: 300, descripcion: "Descripción del producto C", stock: 8 },
];

// Renderizar productos
const renderProductos = () => {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = ""; // Limpiar contenido previo

    productos.forEach((producto) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "col-md-4 mb-4";

        tarjeta.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text"><strong>Precio: $${producto.precio}</strong></p>
                    <p class="card-text">Stock: ${producto.stock}</p>
                    <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})" ${producto.stock === 0 ? 'disabled' : ''}>Agregar al carrito</button>
                </div>
            </div>
        `;

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
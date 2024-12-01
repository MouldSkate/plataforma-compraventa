const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configurar la conexión a la base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Usuario MySQL
    password: 'Amorduele5637.', // Contraseña MySQL
    database: 'sistemacompraventa' // Nombre de la base de datos
});

// Conexión a la base de datos
conexion.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Rutas para usuarios
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // Lógica para autenticar usuario
    res.json({ message: 'Login pendiente de implementación' });
});

app.post('/api/register', (req, res) => {
    const { username, password, role } = req.body;
    // Lógica para registrar usuario
    res.json({ message: 'Registro pendiente de implementación' });
});

// Endpoint para obtener productos
app.get('/api/productos', (req, res) => {
    const query = 'SELECT * FROM productos';

    conexion.query(query, (err, resultados) => {
        if (err) {
            console.error('Error al obtener productos:', err);
            res.status(500).json({ error: 'Error al obtener productos' });
        } else {
            res.json(resultados);
        }
    });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

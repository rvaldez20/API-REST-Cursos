const express = require('express');

// Se requieren las routes
const routes = require('./routes/index.routes');
const routesCompany = require('./routes/company.routes');
const routesCourse = require('./routes/course.routes');

// Conexión de a la DB
const db = require('./config/db');

// importamos el modelo
require('./models/Company');

// con db.authenticate() solo se conecta
db.sync()
   .then(() => console.log('DB connected success'))
   .catch(error => console.log(error));

const app = express();

// Rutas de la app
app.use('/', routes());
app.use('/', routesCompany());
app.use('/', routesCourse());

app.listen(3001, () => {
   console.log('Server on port 3001');
});
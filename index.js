const express = require('express');

// Se requieren las routes
const routes = require('./routes/index.routes');
const routesCompany = require('./routes/company.routes');
const routesCourse = require('./routes/course.routes');

const app = express();

// Rutas de la app
app.use('/', routes());
app.use('/', routesCompany());
app.use('/', routesCourse());

app.listen(3001, () => {
   console.log('Server on port 3001');
});
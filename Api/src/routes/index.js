const { Router } = require('express');

// Aqui se importan los routers para las diferentes rutas:
const usersRouter = require('./usersRoutes');
const ocupationsRouter = require('./ocupationsRoutes');
const categoryRouter = require('./categoryRoutes');
const profesionalRouter = require('./profesionalRouter');

/* Endpoints
!users / all
!Ocupaciones
clientes
Proveedores
Post(publicaciones del cliente)
Citas
*/ 

const router = Router();

// Enrutado:
router.use('/users', usersRouter); // Clientes 
router.use('/profesional',profesionalRouter); //roveedores
router.use('/ocupations', ocupationsRouter);
router.use('/category',categoryRouter);

module.exports = router;

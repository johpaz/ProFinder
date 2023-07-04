const { Router } = require('express');

// Aqui se importan los routers para las diferentes rutas:
const usersRouter = require('./usersRoutes');
const ocupationsRouter = require('./ocupationsRoutes');
const profesionalRouter = require('./profesionalRouter') 

const router = Router();

// Enrutado:
router.use('/users', usersRouter); // Clientes 
router.use('/profesional',profesionalRouter); //roveedores
router.use('/ocupations', ocupationsRouter);

module.exports = router;

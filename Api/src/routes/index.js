const { Router } = require('express');

// Aqui se importan los routers para las diferentes rutas:
const clientRouter = require('./usersRoutes');
const ocupationsRouter = require('./ocupationsRoutes');
const profesionalRouter = require('./profesionalRouter')

const router = Router();

// Enrutado:
router.use('/client', clientRouter); // Clientes 
router.use('/profesional', profesionalRouter); //Proveedores
router.use('/ocupations', ocupationsRouter); 

module.exports = router;

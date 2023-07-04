const { Router } = require('express');

// Aqui se importan los routers para las diferentes rutas:

const usersRouter = require('./usersRoutes');
const ocupationsRouter = require('./ocupationsRoutes');

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

router.use('/users', usersRouter);
router.use('/ocupations', ocupationsRouter);

module.exports = router;
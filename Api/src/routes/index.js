const { Router } = require('express');

// Aqui se importan los routers para las diferentes rutas:

const usersRouter = require('./usersRoutes');
const ocupationsRouter = require('./ocupationsRoutes');
const categoryRouter = require('./categoryRoutes');

/* Endpoints
!users / all
!Ocupaciones
!category
clientes
Proveedores
Post(publicaciones del cliente)
Citas
*/ 

const router = Router();

// Enrutado:

router.use('/users', usersRouter);
router.use('/ocupations', ocupationsRouter);
router.use('/category',categoryRouter);

module.exports = router;
const { Router } = require('express');

// Aqui se importan los routers para las diferentes rutas:
const usersRouter = require('./usersRoutes');
const ocupationsRouter = require('./ocupationsRoutes');

const router = Router();

// Enrutado:
router.use('/users', usersRouter);
router.use('/ocupations', ocupationsRouter);

module.exports = router;

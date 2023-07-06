const { Router } = require('express');

// Aqui se importan los routers para las diferentes rutas:
const clientRouter = require('./clientRoutes');
const ocupationsRouter = require('./ocupationsRoutes');
const profesionalRouter = require('./profesionalRouter');
const categoryRouter = require('./categoryRoutes');
const registerRouter= require('./registerRoutes')
const loginRouter= require ('./loginRoutes')
const profesionalImagesRouter = require('./profesionalImagesRouter');

const router = Router();

// Enrutado:
//hola
router.use('/client', clientRouter); // Clientes 
router.use('/profesional', profesionalRouter); //Proveedores

router.use('/category',categoryRouter);
router.use('/profesional-images',profesionalImagesRouter)

router.use('/ocupations', ocupationsRouter);

router.use('/register', registerRouter);

router.use('/login', loginRouter);

module.exports = router;

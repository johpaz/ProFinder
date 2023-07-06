const { Router } = require('express');

// Aqui se importan los routers para las diferentes rutas:

const clientRouter = require('./clientRoutes');

const ocupationsRouter = require('./ocupationsRoutes');

const profesionalRouter = require('./profesionalRouter');

const categoryRouter = require('./categoryRoutes');

const registerRouter= require('./registerRoutes');

const loginRouter= require ('./loginRoutes');

const profesionalImagesRouter = require('./profesionalImagesRouter');

// Router: 

const router = Router();

// Enrutado:

router.use('/client', clientRouter); // Clientes 

router.use('/profesional', profesionalRouter); //Proveedores

router.use('/category',categoryRouter); //Categorias

router.use('/profesional-images',profesionalImagesRouter); //Profesional-images

router.use('/ocupations', ocupationsRouter); //ocupations

router.use('/register', registerRouter); // register

router.use('/login', loginRouter); //login

module.exports = router;

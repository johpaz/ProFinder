const { Router } = require('express');

// Aqui se importan los routers para las diferentes rutas:

const clientRouter = require('./clientRoutes');

const ocupationsRouter = require('./ocupationsRoutes');
const ocupationspRouter = require('./ocupationspRouter')
const profesionalRouter = require('./profesionalRouter');

const categoryRouter = require('./categoryRoutes');
const postClientRouter = require("./postClientRoutes");
const registerRouter = require('./registerRoutes');
const loginRouter = require('./loginRoutes');
const postProfesional = require("./postProfesionalRoutes");
const profesionalImagesRouter = require('./profesionalImagesRouter');

// Router: 

const router = Router();

// Enrutado:

router.use('/client', clientRouter); // Clientes 

router.use('/profesional', profesionalRouter); //Proveedores

router.use('/category', categoryRouter); //Categorias

router.use('/ocupations', ocupationsRouter); // Ocupaciones

router.use('/ocupationsp', ocupationspRouter); // profesionales por Ocupacion

router.use("/postClient", postClientRouter); // Posts del cliente

router.use("/postProfesional", postProfesional) // Post del profesional

router.use('/profesional-images',profesionalImagesRouter); // Posts de las imagenes de los profesionales (detail)

router.use('/register', registerRouter); // register

router.use('/login', loginRouter); //login

module.exports = router;

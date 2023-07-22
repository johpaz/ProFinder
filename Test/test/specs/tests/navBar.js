const { expect } = require('chai');

describe('Prueba de la nueva barra de navegación', () => {
  it('Debería mostrar el logo correctamente', () => {
    browser.url('https://profinder-client.vercel.app/'); // Reemplaza con la URL de tu página

    const logoElement = $('img[src="/assets/Logo-5350a88e.png"]');
    expect(logoElement.isExisting()).to.be.true;
  });

  it('Debería contener los enlaces correctamente', () => {
    browser.url('https://profinder-client.vercel.app/'); // URL de tu página

    const enlaces = $$('.chakra-link'); // Obtén todos los enlaces de la barra de navegación

    // Verifica que haya al menos 4 enlaces
    expect(enlaces.length).to.be.at.least(4);

    // Verifica que los enlaces tengan los textos correctos
    const enlacesTextos = enlaces.map((enlace) => enlace.getText());
    expect(enlacesTextos).to.include.members(['¿Como funciona?', 'Profesionales', 'Contacto', 'Acerca de']);
  });

  it('Debería mostrar el menú desplegable correctamente', () => {
    browser.url('https://profinder-client.vercel.app/'); //  URL de tu página

    const menuButton = $('.chakra-menu__menu-button');
    menuButton.click();

    const menuList = $('.chakra-menu__menu-list');
    expect(menuList.isExisting()).to.be.true;

    const opcionesMenu = $$('.chakra-menu__menuitem'); // Obtén todas las opciones del menú desplegable

    // Verifica que haya al menos 3 opciones en el menú desplegable
    expect(opcionesMenu.length).to.be.at.least(3);

    // Verifica que las opciones tengan los textos correctos
    const opcionesTextos = opcionesMenu.map((opcion) => opcion.getText());
    expect(opcionesTextos).to.include.members(['Soy profesional', 'Soy cliente']);
  });
describe('Prueba de la nueva barra de navegación', () => {
  it('Debería mostrar el logo correctamente', () => {
    // ...
  });

  it('Debería contener los enlaces correctamente', () => {
    // ...
  });

  it('Debería mostrar el menú desplegable correctamente', () => {
    // ...
  });

  it('El botón "Iniciar sesión" debería redireccionar a la página de inicio de sesión', () => {
    browser.url('https://profinder-client.vercel.app/'); // URL de tu página

    const iniciarSesionButton = $('.chakra-button:contains("Iniciar sesion")');
    iniciarSesionButton.click();

    // Espera un momento a que se complete la acción de redireccionamiento
    browser.pause(1000); // Puedes ajustar el tiempo según sea necesario

    // Verifica que la URL actual sea la de la página de inicio de sesión
    expect(browser.getUrl()).to.include('/iniciar-sesion'); //URL de la página de inicio de sesión

    // También puedes verificar otros elementos específicos de la página de inicio de sesión si es necesario
    // const tituloPagina = $('h1');
    // expect(tituloPagina.getText()).to.equal('Página de Inicio de Sesión');
  });

  it('El botón "Registrarse cliente" debería redireccionar a la página de registro de clientes', () => {
    // Similar a la prueba anterior, pero para el botón "Registrarse cliente"
  });

  it('El botón "Registrarse profesional" debería redireccionar a la página de registro de profesionales', () => {
    // Similar a las pruebas anteriores, pero para el botón "Registrarse profesional"
  });
});

});

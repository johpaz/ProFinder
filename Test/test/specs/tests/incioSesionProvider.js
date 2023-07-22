const { expect } = require('chai');
const { remote } = require('webdriverio');

describe('Prueba de inicio de sesión del proveedor', () => {
  it('Debería iniciar sesión correctamente con un proveedor válido', async () => {
    const browser = await remote({
      // Configuración de WebDriverIO
      capabilities: {
        browserName: 'chrome',
      },
    });

    try {
      // Navegamos a la página de inicio de sesión del proveedor
      await browser.url('https://profinder-client.vercel.app/userLogin');

      // Seleccionamos la opción "Profesional" en el menú desplegable de tipo de usuario
      await browser.click('#menu-button-:r22:'); // Hacemos clic en el botón del menú
      await browser.pause(500); // Esperamos un poco para que aparezca el menú
      await browser.click('[name="Profesional"]'); // Hacemos clic en la opción "Profesional"

      // Completamos el formulario de inicio de sesión con los datos del proveedor
      await browser.setValue('#field-:r1v:', 'test@email.com'); // Email del proveedor
      await browser.setValue('#field-:r20:', 'test1234'); // Contraseña del proveedor

      // Hacemos clic en el botón de "Ingresar"
      await browser.click('.chakra-button.css-1vnezre');

      // Esperamos a que se cargue la página después del inicio de sesión (cambiar el selector según la página de destino después del inicio de sesión)
      await browser.waitForExist('.css-14dfcxk');

      // Verificamos que se haya iniciado sesión correctamente (cambiar el selector según el elemento que confirme el inicio de sesión)
      const welcomeMessage = await browser.getText('.css-1f37g66');
      expect(welcomeMessage).to.equal('Hola de nuevo!');

      // Realizamos más verificaciones según sea necesario

    } catch (error) {
      console.error('Error durante la prueba:', error);
    } finally {
      // Cerramos el navegador al finalizar la prueba
      await browser.deleteSession();
    }
  });
});

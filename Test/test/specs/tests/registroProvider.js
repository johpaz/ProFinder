const { expect } = require('chai');
const { remote } = require('webdriverio');

describe('Prueba de registro de profesionales', () => {
  it('Debería completar el formulario y enviarlo correctamente', async () => {
    const browser = await remote({
      // Configuración de WebDriverIO
      capabilities: {
        browserName: 'chrome',
      },
    });

    try {
      // Navegar a la página de registro
      await browser.url('https://profinder-client.vercel.app/registerProvider');

      // Completar el formulario con los datos proporcionados
      await browser.setValue('[name="name"]', 'Allen Leiva');
      await browser.setValue('[name="email"]', 'emmanuel43@corpfolder.com');
      await browser.setValue('[name="phone"]', '5890183100');
      await browser.selectByVisibleText('[name="country"]', 'Argentina');
      await browser.selectByVisibleText('[name="location"]', 'Buenos Aires');
      await browser.selectByVisibleText('[name="radio-:r1a:"]', 'male');
      await browser.setValue('[name="years_exp"]', '3');
      await browser.click('[name="Tecnología"]');
      await browser.click('[name="Artista digital"]');
      await browser.setValue('[name="password"]', 'John1234');

      // Enviar el formulario
      await browser.click('button[type="submit"]');

      // Esperar a que la página de éxito de registro se cargue
      await browser.waitForExist('.registro-exitoso', 5000);

      // Verificar que se haya registrado correctamente
      const registroExitoso = await browser.getText('.registro-exitoso');
      expect(registroExitoso).to.contain('¡Registro exitoso!');

    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Cerrar el navegador
      await browser.deleteSession();
    }
  });
});

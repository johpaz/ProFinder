const { expect } = require('chai');
const { remote } = require('webdriverio');

describe('Pruebas del Dashboard', () => {
  let browser;

  before(async () => {
    browser = await remote({
      // Configuración de WebDriverIO
      capabilities: {
        browserName: 'chrome',
      },
    });

    // Verificar si el usuario está autenticado en LocalStorage
    const isAuthenticated = await browser.execute(() => {
      return window.localStorage.getItem('isLoggedIn');
    });

    // Si el usuario no está autenticado, inicia sesión (reemplaza con el código de inicio de sesión)
    if (!isAuthenticated) {
      await browser.url('https://profinder-client.vercel.app/userLogin');
      await browser.setValue('#field-:r1v:', 'test@email.com');
      await browser.setValue('#field-:r20:', 'Test1234');
      await browser.click('.chakra-button.css-1vnezre');
      await browser.waitForExist('.css-14dfcxk');
    }

    // Navegar al dashboard del proveedor
    await browser.url('https://profinder-client.vercel.app/dashboardSuppliers');
    await browser.waitForExist('.css-1jgi1um');
  });

  after(async () => {
    await browser.deleteSession();
  });
  
  describe('Pruebas de creación de Post', () => {
    // No es necesario volver a declarar 'browser' aquí, ya que ya se ha declarado en el nivel superior.

    before(async () => {
      // Navegar al componente de creación de post
      await browser.url('https://profinder-client.vercel.app/dashboardSuppliers/createpost');
      await browser.waitForExist('.chakra-form-control.css-1kxonj9');
    });

    it('Debería mostrar el formulario de creación de post', async () => {
      const titleInput = await browser.$('#field-:r3a:'); // Seleccionar el input del título
      const contentInput = await browser.$('#field-:r3n:'); // Seleccionar el textarea del contenido

      expect(await titleInput.isDisplayed()).to.be.true;
      expect(await contentInput.isDisplayed()).to.be.true;
    });

    it('Debería permitir crear un nuevo post', async () => {
      const testData = {
        title: 'Desarrollo de software a medida',
        image: ['https://example.com/image.jpg'],
        content: 'Ofrezco servicios de desarrollo de software a medida y soluciones tecnológicas innovadoras.',
        ProfesionalId: 34,
        category: 'Tecnología',
        ocupation: 'Programador',
      };

      // Rellenar el formulario con los datos de prueba
      await browser.setValue('#field-:r3a:', testData.title);
      await browser.setValue('#field-:r3b:', testData.image[0]);
      await browser.setValue('#field-:r3n:', testData.content);
      // Asegúrate de seleccionar la categoría correcta en caso de que el componente lo requiera.
      // Ejemplo: await browser.click('#field-:r3c:-menuitem-:r3f:');

      // Enviar el formulario
      await browser.click('.chakra-button.css-15zlvw7');

      // Esperar a que se cree el post y verificar el resultado.
      await browser.waitForExist('.chakra-container.css-1u0wdm9');
      const postTitle = await browser.getText('.chakra-heading.css-15y2dyk');
      const postContent = await browser.getText('.chakra-text.css-9826r4');

      expect(postTitle).to.equal(testData.title);
      expect(postContent).to.equal(testData.content);
    });

    // Puedes agregar más pruebas según sea necesario para comprobar el comportamiento del componente de creación de post.
  });

  // Resto de las pruebas...
});

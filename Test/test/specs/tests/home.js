// Importamos la librería de WebDriverIO
const { expect } = require('chai');

// Definimos el test
describe('Prueba del home de ProFinder', () => {
  it('Debería mostrar el título correcto', async () => {
    // Abrimos la URL del home de ProFinder
    await browser.url('https://profinder-client.vercel.app');

    // Esperamos a que el título esté presente en la página
    const title = $('title');
    await title.waitForExist();

    // Validamos que el título sea el correcto
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.equal('ProFinder');
  });

  it('Debería contener el elemento con el ID "root"', async () => {
    // Abrimos la URL del home de ProFinder
    await browser.url('https://profinder-client.vercel.app/');

    // Esperamos a que el elemento con el ID "root" esté presente en la página
    const rootElement = $('#root');
    await rootElement.waitForExist();

    // Validamos que el elemento con el ID "root" esté presente
    expect(await rootElement.isExisting()).to.be.true;
  });
});

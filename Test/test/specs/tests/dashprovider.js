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

    // Inicio de sesión como proveedor (asegúrate de que el proveedor esté autenticado antes de ejecutar estas pruebas)
    await browser.url('https://profinder-client.vercel.app/userLogin');
    await browser.setValue('#field-:r1v:', 'test@email.com'); // Reemplaza con el correo de un proveedor válido
    await browser.setValue('#field-:r20:', 'Test1234'); // Reemplaza con la contraseña de un proveedor válido
    await browser.click('.chakra-button.css-1vnezre');
    await browser.waitForExist('.css-14dfcxk');

    // Navegar al dashboard del proveedor
    await browser.url('https://profinder-client.vercel.app/dashboardSuppliers');
    await browser.waitForExist('.css-1jgi1um');
  });

  after(async () => {
    await browser.deleteSession();
  });

  it('Debería ver el botón "Inicio"', async () => {
    const buttonText = await browser.getText('.chakra-button.css-1sn58rb');
    expect(buttonText).to.equal('Inicio');
  });

  it('Debería ver el botón "Publicar"', async () => {
    const buttonText = await browser.getText('.chakra-button.css-1qip9bd span font');
    expect(buttonText).to.equal('publicar');
  });

  it('Debería ver el botón "Ver mis Publicaciones"', async () => {
    const buttonText = await browser.getText('.chakra-button.css-1qip9bd span font');
    expect(buttonText).to.equal('Ver mis Publicaciones');
  });

  it('Debería ver el botón "Editar mi perfil"', async () => {
    const buttonText = await browser.getText('a[href="/dashboardSuppliers"] .chakra-button.css-1qip9bd span font');
    expect(buttonText).to.equal('Editar mi perfil');
  });

  it('Debería ver el botón "Obtén Premium"', async () => {
    const buttonText = await browser.getText('.chakra-button.css-1qip9bd span font');
    expect(buttonText).to.equal('Obtén Premium');
  });

  it('Debería ver el título "MIS DATOS EN LÍNEA"', async () => {
    const titleText = await browser.getText('.chakra-heading.css-1rbvej6 font');
    expect(titleText).to.equal('MIS DATOS EN LÍNEA');
  });

  it('Debería ver el número de "Mis publicaciones"', async () => {
    const publicationCount = await browser.getText('.css-nqwn6f .css-16iqw5x font');
    expect(publicationCount).to.equal('0');
  });

  it('Debería ver el número de "Servicios Terminados"', async () => {
    const completedServicesCount = await browser.getText('.css-cqoqo5 .css-16iqw5x font');
    expect(completedServicesCount).to.equal('15');
  });

  it('Debería ver el número de "Servicios Activos"', async () => {
    const activeServicesCount = await browser.getText('.css-dohmak .css-16iqw5x font');
    expect(activeServicesCount).to.equal('15');
  });

  it('Debería ver el número de "Servicios Cancelados"', async () => {
    const cancelledServicesCount = await browser.getText('.css-jpatyn .css-16iqw5x font');
    expect(cancelledServicesCount).to.equal('0');
  });

  // Puedes agregar más pruebas y verificaciones según los elementos que desees comprobar en el dashboard.
});

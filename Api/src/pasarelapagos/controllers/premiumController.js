const { Premium } = require('../../db');

async function updatePremiumStatus(req, res, next) {
  try {
    // Obtén el preferenciaId del cuerpo de la solicitud POST enviada desde la página de MercadoPago
    const { preferenciaId } = req.body;

    // Busca el modelo Premium asociado al preferenciaId
    const premium = await Premium.findOne({
      where: { preferenciaId },
    });

    if (!premium) {
      throw new Error('El modelo Premium no fue encontrado.');
    }

    // Actualiza el estado active a true
    premium.active = true;
    await premium.save();

    // Responde con una respuesta de éxito
    res.json({ message: 'Estado Premium actualizado con éxito.' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  updatePremiumStatus,
};

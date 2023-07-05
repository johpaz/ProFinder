module.exports = (req,res,next) => {

  const { name, email, image, genre, years_exp, description } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Falta la propiedad name' });
  }

  if (!email) {
    return res.status(400).json({ error: 'Falta la propiedad email' });
  }

  if (!image) {
    return res.status(400).json({ error: 'Falta la propiedad image' });
  }

  if (!genre) {
    return res.status(400).json({ error: 'Falta la propiedad genre' });
  }

  if (!years_exp) {
    return res.status(400).json({ error: 'Falta la propiedad years_exp' });
  }

  if (!description) {
    return res.status(400).json({ error: 'Falta la propiedad description' });
  }

  next();
};
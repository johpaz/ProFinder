// Controllers

// 

// Handlers

const getContacts = (req,res) => {
  return res.status(200).json({DIY: "En esta ruta se obtendrán todas las relaciones de los clientes con los profesionales"});
};

const getContact = (req,res) => {
  const { id } = req.params 
  return res.status(200).json({DIY:`En esta ruta se obtendrá la relación del Cliente de ${id} con los Profesionales`});
};

const postContact = (req,res) => {
  const {id} = req.params
  const {profesionalId} = req.body;

  return res.status(201).json({DIY: `En esta ruta se creará la relación del Cliente de id ${id} con los profesionales de ids ${profesionalId}`});
};

const putContact = (req,res) => {
  const {id} = req.params
  const {ProfesionalId} = req.body;
  return res.status(200).json({DIY: `En esta ruta se actualizará la relación del Cliente de id ${id} con los profesionales de id ${ProfesionalId}`});
}

module.exports = {getContacts,getContact,postContact,putContact}
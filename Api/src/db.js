const { Sequelize } = require('sequelize');

// Importamos los modelos

const ProfesionalModel = require('./models/Profesional');
const OcupationModel = require('./models/Ocupation');
const ClientModel = require('./models/Client');
const ReviewModel = require('./models/Review');
const CategoryModel = require('./models/Category');
const PostProfesionalModel = require('./models/PostProfesional');
const UserModel = require('./models/User')
const CountryModel = require('./models/Country');
const LocationModel = require('./models/Location');
const PremiumModel = require('./models/Premium');
const documentsProfesionalModel=require('./models/DocumentsProfesional');
// Credenciales

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

// Instanciamos sequelize

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, { logging: false });

// Definimos los modelos -> usando una función que recibe una instancia de sequelize

ProfesionalModel(sequelize);
OcupationModel(sequelize);
ClientModel(sequelize);
ReviewModel(sequelize);
CategoryModel(sequelize);
PostProfesionalModel(sequelize);
UserModel(sequelize);
CountryModel(sequelize);
LocationModel(sequelize);
PremiumModel(sequelize);
documentsProfesionalModel(sequelize);

// Destructuring de los modelos para vincularlos -> sequelize.models

const { Profesional, Category, Ocupation, Client, Review, PostProfesional, User,  Country, Location, Premium, DocumentsProfesional} = sequelize.models;

// Relacionar los modelos n:n

Profesional.belongsToMany(Category, { through: "ProfesionalCategory" });
Category.belongsToMany(Profesional, { through: "ProfesionalCategory" });

Profesional.belongsToMany(Ocupation, { through: "ProfesionalOcupations" });
Ocupation.belongsToMany(Profesional, { through: "ProfesionalOcupations" });

//? Profesional - Clients n:n
Profesional.belongsToMany(Client, { through: "ProfesionalClientRelation" });
Client.belongsToMany(Profesional, { through: "ProfesionalClientRelation" });

// Relacionar los modelos 1:n
//? Cliente - Review
Client.hasMany(Review);

Review.belongsTo(Client);

//? Profesional - Review
Profesional.hasMany(Review);

Review.belongsTo(Profesional);

Profesional.hasMany(DocumentsProfesional);

//? Profesional - PostProfesional 
Profesional.hasMany(PostProfesional);

PostProfesional.belongsTo(Profesional);

//? Category - Ocupation
Category.hasMany(Ocupation);
Ocupation.belongsTo(Category);

//? Country - Location 
Country.hasMany(Location);
Location.belongsTo(Country);

//? Country - Profesional
Country.hasMany(Profesional);
Profesional.belongsTo(Country);

//? Location - Profesional
Location.hasMany(Profesional);
Profesional.belongsTo(Location);

//? Country - Client 
Country.hasMany(Client);
Client.belongsTo(Country);

//? Location - Client 
Location.hasMany(Client);
Client.belongsTo(Location);

  // Relacionar 1:1:
  User.hasOne(Profesional)
  Profesional.hasOne(Premium);
  Premium.belongsTo(Profesional); 

module.exports = {
  sequelize,
  ...sequelize.models
}
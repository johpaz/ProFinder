const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Profesional",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          is: /^[a-zA-Z\s]+$/, // Nombre debe ser una palabra o frase sin números ni símbolos
          len:[5,40] // Nombre entre 5 y 40 caracteres
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false, //Agregar phone
        validatE:{
          isEmail: true,
        }
      },
      //  password:{
      //   type: DataTypes.STRING, -> Lo veré con una libreria para cifrado
      //   allowNull:false
      //  },
      image: {
        type: DataTypes.STRING, //Podría ser un BLOB
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      years_exp: {
        type: DataTypes.STRING, // Podría ser INTEGER pero string en caso que no tenga experiencia?
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      pro: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      softDelete: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
      }
    }, {
    timestamps: false,
  })
}
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Client", {
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
      allowNull: false,
      unique: true,
      validate:{
        isEmail: true,
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[0-9]{10}$/ // Expresión regular para validar un número de teléfono de 10 dígitos
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: {
          msg: 'La URL de la imagen no es válida',
          args: true,
        },
      },
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null, //agregar máximo de 5
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate:{
        is: /^[a-zA-Z\s]+$/, // Nombre debe ser una palabra o frase sin números ni símbolos
        len: [5,120]
      }
    },
    ubication: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 50], // Ubicación entre 5 a 50 caracteres
        is: /^[\w\s.-]+$/ // Expresión regular para validar el formato de la ubicación
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    pro: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    softDelete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
    }
  }, {
    timestamps: false,
  });
};
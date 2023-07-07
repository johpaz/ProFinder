const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Client", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
    //  password:{
    //   type: DataTypes.STRING, -> Lo veré con una libreria para cifrado
    //   allowNull:false
    //  },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: {
          msg: 'La URL de la imagen no es válida',
          args: true,
        },
        isImageURL: (value) => {
          if (!isURL(value, { protocols: ['http', 'https'] })) {
            throw new Error('El formato de la imagen no es válido');
          }
          if (!value.match(/\.(jpeg|jpg|gif|png)$/i)) {
            throw new Error('La imagen debe tener un formato válido (jpeg, jpg, gif, png)');
          }
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
  })
};
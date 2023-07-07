const { DataTypes } = require('sequelize');
const { isURL } = require('validator');

module.exports = (sequelize) => {
  sequelize.define("Post", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[5,200] // El nombre de la category debe tener mínimo 3 caracteres y máximo 200
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
};
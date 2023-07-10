const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("ProfesionalImagesPost",{
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    image:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      validate: {
        isUrl: {
          msg: 'La URL de la imagen no es válida',
          args: true,
        },
      },
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: true,
      
    },
    view: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    }
  },{
    timestamps: false,
  })
};
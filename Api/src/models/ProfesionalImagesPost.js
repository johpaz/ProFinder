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
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    view: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  },{
    timestamps: false,
  })
};
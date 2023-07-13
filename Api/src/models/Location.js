const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Location",
  {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        is: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/,// Nombre debe ser una sola palabra sin números ni símbolos
        len:[3,50] //El nombre de la category debe tener mínimo 3 caracteres y máximo 20
      },
    }
  },{
    timestamps: false,
  });
};
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Post",{
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    content:{
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },{
    timestamps: false,
  })
};
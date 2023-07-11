const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User",{
    
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    password:{
      type: DataTypes.STRING,
      allowNull:false
    }

  },{
    timestamps: false,
  })
};// 4ef29225941cb9bb0ea93f9cae9b3bcb614f46f8
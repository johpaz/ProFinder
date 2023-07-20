const { sequelize } = require("../db");

const forgotPassword = async (password) => {
    const sql = await sequelize.query(`SELECT * FROM "Users" where email= '${email}'`);
}
const bcrypt = require("bcrypt");
const { User } = require("../db")

const { sequelize } = require("../db");

const loginUser = async (req, res) => {
    const { usuario, email, password } = req.body;
    console.log(await User.findAll());
    const sql = await sequelize.query(`SELECT * FROM "Users" where email= '${email}'`);

    if (!sql[0].length) { res.status(400).json({ message: "El email no ha sido encontrado" }) };

    if (sql[0][0]) {
        bcrypt.compare(password, sql[0][0].password, (error, resultado) => {
            if (error) throw error;
            if (resultado) {
                typeUser();
                if (!res.status(200)) {
                    res.status(200).json({
                        usuario: usuario,
                        email: email,
                        password: password,
                        message: "Usuario logueado satisfactoriamente"
                    })
                }
            }
            else { res.status(401).json({ message: "La contraseña es inválida" }) }
        }
        );
    };


    const typeUser = async () => {
        switch (usuario) {
            case 'c':
                const loginClient = await sequelize.query(`SELECT * FROM "Clients" WHERE "email"= '${email}'`);



                if (loginClient[0][0] == undefined) {

                    res.status(200).json({

                        usuario: usuario,
                        email: email,
                        password: password,
                        message: "No pertenece al tipo de usuario seleccionado"
                    });

                    break;
                } else {
                    res.status(200).json({
                        id: loginClient[0][0].id,
                        usuario: usuario,
                        email: email,
                        password: password,
                        message: "Usuario logueado satisfactoriamente"
                    }); break;
                }


            case 'p':

                const loginProf = await sequelize.query(`SELECT * FROM "Profesionals" WHERE "email"= '${email}'`);

                if (loginProf[0][0] == undefined) {
                    res.status(200).json({
                        usuario: usuario,
                        email: email,
                        password: password,
                        message: "No pertenece al tipo de usuario seleccionado"
                    });

                    break;
                } else {
                    res.status(200).json({
                        id: loginProf[0][0].id,
                        usuario: usuario,
                        email: email,
                        password: password,
                        message: "Usuario logueado satisfactoriamente"
                    });
                    break;
                }


            case 'a':
                console.log("soy a")

                break;


            default:
                break;
        }

    }
};

const putPasswordForgot = async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    const sql = await sequelize.query(`SELECT * FROM "Users" where email= '${email}'`);
    if (!sql[0].length) { res.status(400).json({ message: "El email no ha sido encontrado" }) };
    const hash = await bcrypt.hash(password, 8);

        try {
            const updateQuery = `UPDATE "Users" SET password = '${hash}' WHERE id = ${sql[0][0].id}`
            await sequelize.query(updateQuery);
            const usuario = sql[0][0].usuario
            const name = sql[0][0].name
            switch (usuario) {
                case 'c':

                    const passwordClient = await sequelize.query(`SELECT * FROM "Clients" WHERE "email"= '${email}'`);

                    res.status(200).json({
                        id: passwordClient[0][0].id,
                        name: name,
                        usuario: usuario,
                        email: email,
                        password: password,
                        message: "Contraseña cambiada."
                    })

                    break;



                case 'p':

                    const passwordProf = await sequelize.query(`SELECT * FROM "Profesionals" WHERE "email"= '${email}'`);

                    res.status(200).json({
                        id: passwordProf[0][0].id,
                        name: name,
                        usuario: usuario,
                        email: email,
                        password: password,
                        message: "El usuario se ha registrado exitosamente"
                    })


                    break;
                default:
                    res.status(400).json({ message: "Tipo de usuario inválido" });
                    break;
            }


        } catch (error) {
            res.status(400).json({ error: error.message })
        };
    
}

module.exports = { loginUser, putPasswordForgot };



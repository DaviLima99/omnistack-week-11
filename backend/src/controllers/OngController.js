const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
    },

    async create(req, res) {
        const {name, email, wpp, city, uf} = req.body;

        const response = await connection('ongs').insert({
            name, 
            email,
            wpp,
            city,
            uf
        })

        console.log(response);

        return res.json({
            message: "Cadastro realizado com sucesso!",
            id: response
        });
    }
};
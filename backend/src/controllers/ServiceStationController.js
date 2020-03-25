const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const stations = await connection('service_stations').select('*');
        return res.json(stations);
    },

    async create(req, res) {
        const {name, email, wpp, city, uf} = req.body;

        await connection('service_stations').insert({
            name, 
            email,
            wpp,
            city,
            uf
        })

        return res.json({
            message: "Success!"
        });
    }
};
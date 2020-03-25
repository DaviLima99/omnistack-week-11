const connection = require('../database/connection');

module.exports = {
    async login(req, res) {
        const {id} = req.body;
        const station = await connection('service_stations')
            .where('id', id)
            .select('name')
            .first();

        if (!station) {
            return res.status(400).json({erro: 'No sevice station found with this ID!'});
        }

        return res.json(station);
    }
}
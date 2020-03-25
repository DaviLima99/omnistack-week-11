const connection = require('../database/connection');

module.exports = {

    /**
     * List incidents by profile
     * 
     * @param {object} req 
     * @param {object} res 
     */
    async index(req, res) {
        const station_id = req.headers.authorization;

        const incidents = await connection('incidents')
            .where('service_station_id', station_id)
            .select('*');

        return res.json(incidents);
    }

}
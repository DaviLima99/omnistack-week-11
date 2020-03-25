const connection = require('../database/connection');

module.exports = {

    /**
     * List incidents
     * 
     * @param {object} req 
     * @param {object} res 
     */
    async index(req, res) {
        const {page = 1} = req.query;
        const limit = 5;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('service_stations', 'service_stations.id', '=', 'incidents.service_station_id')
            .limit(limit)
            .offset((page - 1) * limit)
            .select([
                'incidents.*', 
                'service_stations.name', 
                'service_stations.email', 
                'service_stations.wpp', 
                'service_stations.city', 
                'service_stations.uf'
            ]);
        
        res.header('X-Total-Count', count['count(*)']);

        return res.json(incidents);
    },

    /**
     * Create a new incident
     * 
     * @param {object} req 
     * @param {object} res 
     */
    async create(req, res) {
        const {name, description, cpf, contact} = req.body;

        const service_station_id = req.headers.authorization;

        const result = await connection('incidents').insert({
            name, description, cpf, contact, service_station_id
        })
        
        return res.json({"id": result[0]});
    },

    /**
     * Delete a incident
     * 
     * @param {object} req 
     * @param {object} res 
     */
    async delete(req, res) {
        const { id } = req.params;
        const service_station_id = req.headers.authorization;

        
        const incident = await connection('incidents')
            .where('id', id)
            .select('service_station_id')
            .first();

        if (incident.service_station_id != service_station_id) {
            return res.status(401).json({erro: 'Operation not permitted!'});
        }

        await connection('incidents').where('id', id).delete();

        return res.status(204).send();
    }   
}
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
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(limit)
            .offset((page - 1) * limit)
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.wpp', 
                'ongs.city', 
                'ongs.uf'
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
        const {name, description,value} = req.body;

        const ong_id = req.headers.authorization;

        const result = await connection('incidents').insert({
            name, description, value, ong_id
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
        const ong_id = req.headers.authorization;

        
        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return res.status(401).json({erro: 'Operation not permitted!'});
        }

        await connection('incidents').where('id', id).delete();

        return res.status(204).send();
    }   
}
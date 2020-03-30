const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

desccribe('ONG', () => {

    beforeEach( async () => {
        await connection.migrate.latest();
    });

    it('should be able to create a new ONG', () => {
        const response = request(app).post('/ongs').send({
            name: "ONG G PEACE",
            email: "atendiment123456@ong.com.br",
            wpp: "11111111",
            city: "Rio de Janeiro",
            uf: "RJ"
        })
    })
});
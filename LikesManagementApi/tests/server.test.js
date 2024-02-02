const request = require('supertest');
const app = require('../server');

describe('Testes de API', () => {
    it('Deve retornar a contagem de curtidas para uma imagem específica', async () => {
        const res = await request(app).get('/api/likes/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body.likes).toBeDefined();
    });

    it('Deve adicionar uma curtida a uma imagem', async () => {
        const res = await request(app).post('/api/likes/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toBeTruthy();
    });
});

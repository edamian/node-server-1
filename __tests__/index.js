const supertest = require('supertest');
const app = require('../server');

const request = supertest(app);

it('Get character', async (done) => {
    const response = await request.get('/api/characters/3');
    expect(response.status).toBe(200);
    expect(response.body.nombre.length > 0).toBeTruthy();
    done();
});

it('Get character invalid route', async (done) => {
    const response = await request.get('/api/character');
    expect(response.status).toBe(404);
    done();
});

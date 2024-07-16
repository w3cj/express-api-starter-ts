import request from 'supertest';

import app from '../../../src/app';

describe('GET /api/v1/tasks', () => {
  it('responds with an array of tasks', async () =>
    request(app)
      .get('/api/v1/tasks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('length');
        expect(response.body.length).toBe(1);
        expect(response.body[0]).toHaveProperty('content');
        expect(response.body[0]).toHaveProperty('done');
      }));
});

const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
  it('should get all exam questions', async () => {
    const res = await request(app).get('/api/exam');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('questions');
  });

  it('should create a new question', async () => {
    const res = await request(app)
      .post('/api/question')
      .send({
        type: 'MCQ',
        questionText: 'What is Docker?',
        options: ['A tool for virtualization', 'A container management tool', 'A database'],
        answer: 'A container management tool',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should handle invalid data', async () => {
    const res = await request(app)
      .post('/api/question')
      .send({
        type: 'MCQ',
        questionText: 'Incomplete data example',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });
});

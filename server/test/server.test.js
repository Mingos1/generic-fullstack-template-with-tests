/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/server');

describe('Root path - basic functions', () => {
  test('return a response to the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toEqual(200);
  });
});

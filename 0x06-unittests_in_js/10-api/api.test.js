const request = require('request');
const { expect } = require('chai');

describe('API Integration Testing', () => {
  const url = 'http://localhost:7865';

  it('GET / returns the correct response', (done) => {
    request.get(`${url}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${url}/cart/32`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 32');
      done();
    });
  });

  it('GET /cart/:id returns a 404 for negative numbers', (done) => {
    request.get(`${url}/cart/-1`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns a 404 for non-numeric numbers in :id', (done) => {
    request.get(`${url}/cart/a1`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /available_payments returns the correct response', (done) => {
    request.get(`${url}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });

  it('POST /login returns a valid response', (done) => {
    request.post(`${url}/login`, { json: { userName: 'Betty' } }, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Betty');
      done();
    });
  });
});

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
  it('GET /cart/:id returns error for non-numeric :id', (done) => {
    request.get(`${url}/cart/abc`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it('GET /cart/:id returns error for negative :id', (done) => {
    request.get(`${url}/cart/-32`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});

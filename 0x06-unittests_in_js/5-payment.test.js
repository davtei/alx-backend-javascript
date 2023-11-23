const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentsToApi', () => {
  let spy;

  beforeEach(() => {
    if (!spy) {
      spy = sinon.spy(console, 'log');
    }
  });

  afterEach(() => {
    spy.log.resetHistory();
  });

  it('sendPaymentsToApi(100, 20) logs "The total is: 120" to console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.log.calledWith('The total is: 120')).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
  });

  it('sendPaymentsToApi(10, 10) logs "The total is: 20" to console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.log.calledWith('The total is: 20')).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
  });
});

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentsToApi', () => {
  it('sendPaymentsToApi uses calculateNumber method of Utils', () => {
    const spy = sinon.spy(console);
    const stubby = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);
    expect(stubby.calledWith('SUM', 100, 20)).to.be.true;
    expect(stubby.callCount).to.be.equal(1);

    expect(spy.log.calledWith('The total is: 10')).to.be.true;
    expect(spy.log.callCount).to.be.equal(1);
    stubby.restore();
    spy.log.restore();
  });
});

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('type == SUM', () => {
    it('should return 4 when adding 1 and 3', () => {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('should return 5 when adding 1 and 3.7', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('should return 5 when adding 1.2 and 3.7', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('should return 6 when adding 1.5 and 3.7', () => {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('should return 0 when adding 0.1 and 0.3', () => {
      assert.equal(calculateNumber('SUM', 0.1, 0.3), 0);
    });
    it('should return -4 when adding -1 and -3', () => {
      assert.equal(calculateNumber('SUM', -1, -3), -4);
    });
    it('should return -5 when adding -1 and -3.7', () => {
      assert.equal(calculateNumber('SUM', -1, -3.7), -5);
    });
    it('should return -5 when adding -1.2 and -3.7', () => {
      assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
    });
    it('should return -5 when adding -1.5 and -3.7', () => {
      assert.equal(calculateNumber('SUM', -1.5, -3.7), -5);
    });
    it('should return 0 when adding -0.1 and -0.3', () => {
      assert.equal(calculateNumber('SUM', -0.1, -0.3), 0);
    });
    it('should return 3 when adding -1 and 3.7', () => {
      assert.equal(calculateNumber('SUM', -1, 3.7), 3);
    });
    it('should return 5 when adding 1 and -3.7', () => {
      assert.equal(calculateNumber('SUM', 1, -3.7), -3);
    });
    it('should return -5 when adding -1 and 3.3', () => {
      assert.equal(calculateNumber('SUM', -1, 3.3), 2);
    });
    it('should return 5 when adding 1 and -3.3', () => {
      assert.equal(calculateNumber('SUM', 1, -3.3), -2);
    });
    it('should return 0 when adding 0 and 0', () => {
      assert.equal(calculateNumber('SUM', 0, 0), 0);
    });
    it('should return 0 when adding 0 and -0', () => {
      assert.equal(calculateNumber('SUM', 0, -0), 0);
    });
  });
  describe('type == SUBTRACT', () => {
    it('should return -2 when subtracting 1 from 3', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('should return -3 when subtracting 1 from 3.7', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('should return -3 when subtracting 1.2 from 3.7', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });
    it('should return -2 when subtracting 1.5 from 3.7', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    it('should return 0 when subtracting 0.1 from 0.3', () => {
      assert.equal(calculateNumber('SUBTRACT', 0.1, 0.3), 0);
    });
    it('should return 2 when subtracting -1 from -3', () => {
      assert.equal(calculateNumber('SUBTRACT', -1, -3), 2);
    });
    it('should return 3 when subtracting -1 from -3.7', () => {
      assert.equal(calculateNumber('SUBTRACT', -1, -3.7), 3);
    });
    it('should return 3 when subtracting -1.2 from -3.7', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.2, -3.7), 3);
    });
    it('should return 3 when subtracting -1.5 from -3.7', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.5, -3.7), 3);
    });
    it('should return 0 when subtracting -0.1 from -0.3', () => {
      assert.equal(calculateNumber('SUBTRACT', -0.1, -0.3), 0);
    });
    it('should return -5 when subtracting -1 from 3.7', () => {
      assert.equal(calculateNumber('SUBTRACT', -1, 3.7), -5);
    });
    it('should return 5 when subtracting 1 from -3.7', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, -3.7), 5);
    });
    it('should return -4 when subtracting -1 from 3.3', () => {
      assert.equal(calculateNumber('SUBTRACT', -1, 3.3), -4);
    });
    it('should return 4 when subtracting 1 from -3.3', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, -3.3), 4);
    });
    it('should return 0 when subtracting 0 from 0', () => {
      assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    });
    it('should return 0 when subtracting 0 from -0', () => {
      assert.equal(calculateNumber('SUBTRACT', 0, -0), 0);
    });
  });
  describe('type == DIVIDE', () => {
    it('should return 0.3333333333333333 when dividing 1 by 3', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
    });
    it('should return 0.25 when dividing 1 by 3.7', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });
    it('should return 0.25 when dividing 1.2 by 3.7', () => {
      assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
    });
    it('should return 0.5 when dividing 1.5 by 3.7', () => {
      assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    });
    it('should return isNaN when dividing 0.1 by 0.3', () => {
      assert.equal(isNaN(calculateNumber('DIVIDE', 0.1, 0.3)), true);
    });
    it('should return 0.3333333333333333 when dividing -1 by -3', () => {
      assert.equal(calculateNumber('DIVIDE', -1, -3), 0.3333333333333333);
    });
    it('should return 0.25 when dividing -1 by -3.7', () => {
      assert.equal(calculateNumber('DIVIDE', -1, -3.7), 0.25);
    });
    it('should return 0.25 when dividing -1.2 by -3.7', () => {
      assert.equal(calculateNumber('DIVIDE', -1.2, -3.7), 0.25);
    });
    it('should return 0.25 when dividing -1.5 by -3.7', () => {
      assert.equal(calculateNumber('DIVIDE', -1.5, -3.7), 0.25);
    });
    it('should return isNaN when dividing -0.1 by -0.3', () => {
      assert.equal(isNaN(calculateNumber('DIVIDE', -0.1, -0.3)), true);
    });
    it('should return -0.25 when dividing -1 by 3.7', () => {
      assert.equal(calculateNumber('DIVIDE', -1, 3.7), -0.25);
    });
    it('should return -0.25 when dividing 1 by -3.7', () => {
      assert.equal(calculateNumber('DIVIDE', 1, -3.7), -0.25);
    });
    it('should return -0.3333333333333333 when dividing -1 by 3.3', () => {
      assert.equal(calculateNumber('DIVIDE', -1, 3.3), -0.3333333333333333);
    });
    it('should return -0.3333333333333333 when dividing 1 by -3.3', () => {
      assert.equal(calculateNumber('DIVIDE', 1, -3.3), -0.3333333333333333);
    });
    it('should return NaN when dividing 0 by 0', () => {
      assert.equal(isNaN(calculateNumber('DIVIDE', 0, 0)), true);
    });
    it('should return NaN when dividing 0 by -0', () => {
      assert.equal(isNaN(calculateNumber('DIVIDE', 0, -0)), true);
    });
  });
});

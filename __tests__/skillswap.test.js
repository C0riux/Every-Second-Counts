const {getSecsRemaining} = require('./test-functionality.js');

describe('getSecsRemaining', () => {
  test('Correctly calculates the time remaining until a give date', () => {
    expect(getSecsRemaining(new Date())).toBe(0);
  });
});
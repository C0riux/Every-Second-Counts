const {getSecsRemaining} = require('../test-functionality.js');

describe('getSecsRemaining', () => {
  test('Correctly calculates the time remaining on a timer that is expiring', () => {
    //We use .toBeCloseTo to account for any minor delays that occur when running the test
    expect(getSecsRemaining(new Date())).toBeCloseTo(0);
  })
  test('Correctly calculates the time remaining until a given date/time', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2026-12-01T00:00:00'));

    expect(
      getSecsRemaining(new Date('2026-12-01T00:00:10'))
    ).toBeCloseTo(10);

    jest.useRealTimers();
  })
});
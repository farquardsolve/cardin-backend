const assert = require('assert');
const app = require('../../src/app');

describe('\'clock-in-out\' service', () => {
  it('registered the service', () => {
    const service = app.service('clock-in-out');

    assert.ok(service, 'Registered the service');
  });
});

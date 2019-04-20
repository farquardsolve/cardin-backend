const assert = require('assert');
const app = require('../../src/app');

describe('\'clock-activities\' service', () => {
  it('registered the service', () => {
    const service = app.service('clock-activities');

    assert.ok(service, 'Registered the service');
  });
});

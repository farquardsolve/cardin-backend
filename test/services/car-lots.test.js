const assert = require('assert');
const app = require('../../src/app');

describe('\'car-lots\' service', () => {
  it('registered the service', () => {
    const service = app.service('car-lots');

    assert.ok(service, 'Registered the service');
  });
});

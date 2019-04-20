const assert = require('assert');
const app = require('../../src/app');

describe('\'engagement-types\' service', () => {
  it('registered the service', () => {
    const service = app.service('engagement-types');

    assert.ok(service, 'Registered the service');
  });
});

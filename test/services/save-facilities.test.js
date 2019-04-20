const assert = require('assert');
const app = require('../../src/app');

describe('\'save-facilities\' service', () => {
  it('registered the service', () => {
    const service = app.service('save-facilities');

    assert.ok(service, 'Registered the service');
  });
});

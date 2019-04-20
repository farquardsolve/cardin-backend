const assert = require('assert');
const app = require('../../src/app');

describe('\'persons\' service', () => {
  it('registered the service', () => {
    const service = app.service('persons');

    assert.ok(service, 'Registered the service');
  });
});

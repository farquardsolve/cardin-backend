const assert = require('assert');
const app = require('../../src/app');

describe('\'authenticate-users\' service', () => {
  it('registered the service', () => {
    const service = app.service('authenticate-users');

    assert.ok(service, 'Registered the service');
  });
});

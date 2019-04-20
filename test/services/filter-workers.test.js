const assert = require('assert');
const app = require('../../src/app');

describe('\'filter-workers\' service', () => {
  it('registered the service', () => {
    const service = app.service('filter-workers');

    assert.ok(service, 'Registered the service');
  });
});

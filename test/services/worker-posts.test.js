const assert = require('assert');
const app = require('../../src/app');

describe('\'worker-posts\' service', () => {
  it('registered the service', () => {
    const service = app.service('worker-posts');

    assert.ok(service, 'Registered the service');
  });
});

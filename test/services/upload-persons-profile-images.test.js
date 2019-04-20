const assert = require('assert');
const app = require('../../src/app');

describe('\'upload-persons-profile-images\' service', () => {
  it('registered the service', () => {
    const service = app.service('upload-persons-profile-images');

    assert.ok(service, 'Registered the service');
  });
});

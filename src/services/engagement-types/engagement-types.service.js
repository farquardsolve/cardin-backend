// Initializes the `engagement-types` service on path `/engagement-types`
const createService = require('feathers-mongoose');
const createModel = require('../../models/engagement-types.model');
const hooks = require('./engagement-types.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/engagement-types', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('engagement-types');

  service.hooks(hooks);
};

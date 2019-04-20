// Initializes the `clock-in-out` service on path `/clock-in-out`
const createService = require('feathers-mongoose');
const createModel = require('../../models/clock-in-out.model');
const hooks = require('./clock-in-out.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/clock-in-out', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('clock-in-out');

  service.hooks(hooks);
};

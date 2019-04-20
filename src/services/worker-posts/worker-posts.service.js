// Initializes the `worker-posts` service on path `/worker-posts`
const createService = require('feathers-mongoose');
const createModel = require('../../models/worker-posts.model');
const hooks = require('./worker-posts.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/worker-posts', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('worker-posts');

  service.hooks(hooks);
};

// Initializes the `filter-workers` service on path `/filter-workers`
const createService = require('./filter-workers.class.js');
const hooks = require('./filter-workers.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/filter-workers', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('filter-workers');

  service.hooks(hooks);
};

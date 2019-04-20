// Initializes the `registrations` service on path `/registrations`
const createService = require('./registrations.class.js');
const hooks = require('./registrations.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/registrations', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('registrations');

  service.hooks(hooks);
};

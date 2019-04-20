// Initializes the `clock-activities` service on path `/clock-activities`
const createService = require('./clock-activities.class.js');
const hooks = require('./clock-activities.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/clock-activities', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('clock-activities');

  service.hooks(hooks);
};

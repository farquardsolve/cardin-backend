// Initializes the `save-facilities` service on path `/save-facilities`
const createService = require('./save-facilities.class.js');
const hooks = require('./save-facilities.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/save-facilities', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('save-facilities');

  service.hooks(hooks);
};

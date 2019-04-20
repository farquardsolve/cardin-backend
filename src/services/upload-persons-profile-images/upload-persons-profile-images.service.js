// Initializes the `upload-persons-profile-images` service on path `/upload-persons-profile-images`
const createService = require('./upload-persons-profile-images.class.js');
const hooks = require('./upload-persons-profile-images.hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/profile');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'upload-persons-profile-images',
    paginate
  };

  app.use('/upload-persons-profile-images', blobService({ Model: blobStorage}));
  const service = app.service('upload-persons-profile-images');
  service.hooks(hooks);
};

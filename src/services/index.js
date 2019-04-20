const users = require('./users/users.service.js');
const facilities = require('./facilities/facilities.service.js');
const persons = require('./persons/persons.service.js');
const registrations = require('./registrations/registrations.service.js');
const saveFacilities = require('./save-facilities/save-facilities.service.js');
const uploadPersonsProfileImages = require('./upload-persons-profile-images/upload-persons-profile-images.service.js');
const workerPosts = require('./worker-posts/worker-posts.service.js');
const engagementTypes = require('./engagement-types/engagement-types.service.js');
const carLots = require('./car-lots/car-lots.service.js');
const filterWorkers = require('./filter-workers/filter-workers.service.js');
const clockInOut = require('./clock-in-out/clock-in-out.service.js');
const clockActivities = require('./clock-activities/clock-activities.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(facilities);
  app.configure(persons);
  app.configure(registrations);
  app.configure(saveFacilities);
  app.configure(uploadPersonsProfileImages);
  app.configure(workerPosts);
  app.configure(engagementTypes);
  app.configure(carLots);
  app.configure(filterWorkers);
  app.configure(clockInOut);
  app.configure(clockActivities);
};

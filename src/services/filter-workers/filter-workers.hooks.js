const { authenticate } = require('@feathersjs/authentication').hooks;
const format = require('date-fns/format');
const {fastJoin} = require('feathers-hooks-common');

const resolvers = {
  joins: {
    clockedStatusObject: () => async (person, context) => {
      let dt = new Date;
      console.log(dt,dt.getDate());
      let startDate = format(dt,'YYYY-MM-DD');
      console.log(startDate);
      let endDate = dt;
      endDate.setDate(1+dt.getDate());
      console.log(startDate,endDate);
      try {
        if (person._id !== undefined) {
          const clocked = await context.app.service('clock-in-out').find({
            query: {
              facilityId:person.facilityId,
              personId:person._id,
              $and: [{
                updatedAt: {
                    $gte: startDate
                }
            },
            {
                updatedAt: {
                    $lt: endDate
                }
            }
            ],
            }
          });
          person.clocked = clocked.data[0];
        }
      } catch (error) {
        person.clocked = {};
      }
    }
  }
};

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [fastJoin(resolvers)],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

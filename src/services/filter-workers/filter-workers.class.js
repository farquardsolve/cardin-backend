/* eslint-disable no-unused-vars */
class Service {
  constructor(options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async find(params) {
    const personsService = this.app.service('persons');
    const persons = await personsService.find({
      query: {
        facilityId: params.query.facilityId,
        $or: [{
            'firstName': {
              $regex: params.query.name,
              $options: 'i'
            }
          },
          {
            'lastName': {
              $regex: params.query.name,
              $options: 'i'
            }
          },
          {
            'employeeId': {
              $regex: params.query.name,
              $options: 'i'
            }
          },
          {
            'cardId': {
              $regex: params.query.name,
              $options: 'i'
            }
          }
        ],
      }
    });

    return persons;
  }

  async get(id, params) {
    return {
      id,
      text: `A new message with ID: ${id}!`
    };
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return {
      id
    };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;

/* eslint-disable no-unused-vars */

const jsend = require('jsend');

class Service {
  constructor (options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    const facilityService = this.app.service('facilities');
    delete data._id;
    delete data.isActive;
    delete data.paidUserLicence;
    delete data.licencedDate;
    delete data.deativeDate;
    const facility = await facilityService.patch(id,data,{});
    return jsend.success(facility);
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;

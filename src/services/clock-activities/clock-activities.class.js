/* eslint-disable no-unused-vars */
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
    const clockService = this.app.service('clock-in-out');
    data.clockIn.clockTime = new Date;
    const clocked = await clockService.create(data);
    return clocked;
  }

  async update (id, data, params) {
    const clockService = this.app.service('clock-in-out');
    data.clockOut.clockTime = new Date;
    const clocked = await clockService.patch(id,data,{});
    return clocked;
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

/* eslint-disable no-unused-vars */

const jsend = require('jsend');

function minimumSwaps(ratings) {
  let swap1 = [];
  let swap2 = [];
  let mRating = JSON.parse(JSON.stringify(ratings));
  let sortedRatings = mRating.sort(function (a, b) {
    return b - a
  });
  for (let i = 0; i < ratings.length; i++) {
    if (sortedRatings[i] !== ratings[i]) {
      for (let j = 0; j < ratings.length; j++) {
        if (ratings[i] === sortedRatings[j]) {
          let chk1 = swap1.filter(x => x !== i);
          let chk2 = swap2.filter(x => x !== j);
          if (chk1.length === 0 && chk2.length === 0) {
            swap1.push(i);
            swap2.push(j);
          }
          continue;
        }
      }
    }
  }
  return swap2.length;
}

class Service {
  constructor(options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async find(params) {
    return [];
  }

  async get(id, params) {
    return {
      id,
      text: `A new message with ID: ${id}!`
    };
  }

  async create(data, params) {

    let len = minimumSwaps([3, 1, 2]);
    console.log(len);
    return jsend.success(len);


    // const personsService = this.app.service('persons');
    // const facilityService = this.app.service('facilities');
    // const userService = this.app.service('users');
    // const authService = this.app.service('authentication');

    // const facility = await facilityService.create({
    //   name: data.facilityName
    // });
    // const person = await personsService.create({
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   phone: data.phone,
    //   email: data.email,
    //   facilityId: facility._id
    // });

    // await userService.create({
    //   phone: data.phone,
    //   password: data.password,
    //   facilityId: facility._id,
    //   personId: person._id
    // });


    // const auth = await authService.create({
    //   phone: data.phone,
    //   password: data.password,
    //   strategy: "local"
    // });

    // return jsend.success({
    //   facility: facility,
    //   person: person,
    //   auth: auth
    // });

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

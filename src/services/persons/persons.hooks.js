const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const {
  protect
} = require('@feathersjs/authentication-local').hooks;
const {
  fastJoin
} = require('feathers-hooks-common');


const fastJoinImagePath = {
  joins: {
    imagePath: () => async (data, context) => {
    //   context.params.query ={
    //     $select:['profileImage','signature','firstName',
    //     'lastName','phone','email','address','extentionNo',
    //     'facilityId','post','isActive','deativeDate',
    //     'signature','profileImage','engagementType','employeeId','cardId']
    // }
      if (data.profileImage !== undefined && data.profileImage !== null) {
        let url = await context.app.service('upload-persons-profile-images').create({
          uri: (data.profileImage !== undefined && data.profileImage.startsWith('data:image/')) ?
          data.profileImage : 'data:image/jpeg;base64,' + data.profileImage
        });
        data.profileImagePath = 'http://localhost:3030/profile/' + url.id;
      }
      if (data.signature !== undefined && data.signature !== null) {
        let _url = await context.app.service('upload-persons-profile-images').create({
          uri: (data.signature !== undefined && data.signature.startsWith('data:image/')) ?
          data.signature : 'data:image/jpeg;base64,' + data.signature
        });
        data.signatureImagePath = 'http://localhost:3030/profile/' + _url.id;
      }

delete data.profileImage;
delete data.signature;


      // if (context.result.data !== undefined) {
      //   for (let index = 0; index < context.result.data.length; index++) {
      //     const x = context.result.data[index];
      //     if (x.profileImage !== undefined && x.profileImage !== null) {
      //       let url = await context.app.service('upload-persons-profile-images').create({
      //         uri: (x.profileImage !== undefined && x.profileImage.startsWith('data:image/')) ?
      //           x.profileImage : 'data:image/jpeg;base64,' + x.profileImage
      //       });
      //       context.result.data[index].profileImagePath = 'http://localhost:3030/profile/' + url.id;
      //     }
      //     if (x.signature !== undefined && x.signature !== null) {
      //       let _url = await context.app.service('upload-persons-profile-images').create({
      //         uri: (x.signature !== undefined && x.signature.startsWith('data:image/')) ?
      //           x.signature : 'data:image/jpeg;base64,' + x.signature
      //       });
      //       context.result.data[index].signatureImagePath = 'http://localhost:3030/profile/' + _url.id;
      //     }
      //   };
      // } else {
      //   if (context.result.profileImage !== undefined && context.result.profileImage !== null) {
      //     let url = await context.app.service('upload-persons-profile-images').create({
      //       uri: (context.result.profileImage !== undefined && context.result.profileImage.startsWith('data:image/')) ?
      //         context.result.profileImage : 'data:image/jpeg;base64,' + context.result.profileImage
      //     });
      //     context.result.profileImagePath = 'http://localhost:3030/profile/' + url.id;
      //     let _url = await context.app.service('upload-persons-profile-images').create({
      //       uri: (context.result.signature !== undefined && context.result.signature.startsWith('data:image/')) ?
      //         context.result.signature : 'data:image/jpeg;base64,' + context.result.signature
      //     });
      //     context.result.signatureImagePath = 'http://localhost:3030/profile/' + _url.id;
      //   }
      // }
    }
  }
}


module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [fastJoin(fastJoinImagePath)],
    find: [],
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

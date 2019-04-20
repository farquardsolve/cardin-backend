// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const users = new mongooseClient.Schema({
    phone: {type: String,required: true },
    password: { type: String, required: true },
    facilityId:{type: String, required: true},
    personId:{type: Schema.Types.ObjectId, required: true},
    isActive:{type: Boolean, required: true, "default":true}
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};

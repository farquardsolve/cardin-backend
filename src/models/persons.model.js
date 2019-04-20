// persons-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const persons = new Schema({
    firstName:{ type: String, required: true },
    lastName:{ type: String, required: true },
    phone:{ type: String, required: true },
    email:{ type: String, required: false },
    address:{ type: String, required: false },
    extentionNo:{ type: String, required: false },
    facilityId: { type: Schema.Types.ObjectId, required: true },
    post:{ type: String, required: false },
    isActive:{ type: Boolean, required: true,"default":true },
    deativeDate:{ type: Date, required: false },
    signature: { type: String, required: false },
    profileImage: { type: String, required: false },
    engagementType:{ type: String, required: false },
    employeeId:{ type: String, required: false },
    cardId:{ type: String, required: false }
  }, {
    timestamps: true
  });

  return mongooseClient.model('persons', persons);
};

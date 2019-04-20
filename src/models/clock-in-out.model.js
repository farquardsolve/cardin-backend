// clock-in-out-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const clockItemScheme = require('../custom-model/clockItem.model');
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const clockInOut = new Schema({
    facilityId: { type: Schema.Types.ObjectId, required: true },
    personId: { type: Schema.Types.ObjectId, required: true },
    clockIn:clockItemScheme,
    clockOut:clockItemScheme,
    isDateClose:{ type: Boolean, default: false }
  }, {
    timestamps: true
  });

  return mongooseClient.model('clockInOut', clockInOut);
};

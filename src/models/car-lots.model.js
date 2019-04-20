// car-lots-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const carLotItemScheme = require('../custom-model/car-lot-item.model');
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const carLots = new Schema({
    name: { type: String, required: true },
    facilityId:{ type: Schema.Types.ObjectId, required: true },
    spaces:[carLotItemScheme]
  }, {
    timestamps: true
  });

  return mongooseClient.model('carLots', carLots);
};

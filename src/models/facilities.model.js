// facilities-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const facilities = new Schema({
    name:{ type: String, required: true },
    contact:{ type: String, required: false },
    email:{ type: String, required: false },
    street:{ type:String, required: false },
    poBox:{ type: String, required: false },
    isActive:{ type: Boolean, required: true,"default":true },
    paidUserLicence:{ type: Number, required: true, "default":1 },
    licencedDate:{ type: Date, required: false },
    deativeDate:{ type: Date, required: false },
    logo: { type: String, required: false }
  }, {
    timestamps: true
  });

  return mongooseClient.model('facilities', facilities);
};

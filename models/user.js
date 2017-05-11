var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String },
  loginname: { type: String},
  password: { type: String },

  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },

  accessToken: { type: String},
});

mongoose.model('User', UserSchema);

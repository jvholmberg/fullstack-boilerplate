var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var UserSchema = new Schema({
  displayName: String,
  username: String,
  password: String,
  activity: {
    register: { type: Date, default: Date.now },
    lastAction: { type: Date, default: Date.now },
    lastCheckIn: Date,
    totalCheckIns: Number
  },
  todos: [String]
});

UserSchema.virtual('date')
  .get(() => {
    return this._id.getTimestamp();
  });

mongoose.model('User', UserSchema);

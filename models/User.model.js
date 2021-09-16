const { Schema, model } = require("mongoose");

function capitalize(val) {
  if (typeof val !== 'string') val = '';
  return val.charAt(0).toUpperCase() + val.substring(1);
}
// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  firstName:{type: String, set:capitalize},
  lastName: {type: String, set:capitalize},
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: String,

  avatarUrl: { type: String, default: "images/user.jpg" },

  transport: [{ type: Schema.Types.ObjectId, ref: 'Vehicles' }]

});

const User = model("User", userSchema);

module.exports = User;


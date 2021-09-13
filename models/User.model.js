const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  firstName: String,
  lastName: String,
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


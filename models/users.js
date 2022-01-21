const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: 'Username is Required',
      unique: true
    },

    email: {
      type: String,
      unique: true,
      match: [/.+@.+\..+/],
      required: 'Please enter a valid e-mail address'
    },

    thoughts: {
  //array of id values
},

    friends: {
  //array of id values
}
  },

{
  toJSON: {
    virtuals: true
  },
  id: false
}
)

UserSchema.virtual('username').get(function () {
  return this.email.slice(0, this.email.indexOf('@'));
});

const User = model('User', UserSchema);

module.exports = User;

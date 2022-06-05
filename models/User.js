const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {

      }
    },
    thoughts: [],
    friends: []
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
)

const User = model('User', UserSchema)

module.exports = User;
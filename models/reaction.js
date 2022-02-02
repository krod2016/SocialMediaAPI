const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
  {
    reactionID: {
      type: Schema.Types.ObjectID,
      default: () => new Types.ObjectID,
    },
    reactionText: {
      type: String,
      required: true,
      minLength: 1,
      minMax: 200
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
  },
{
    toJSON: {
      // virtuals: true,
      getters: true
    },
    id: false
  }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;

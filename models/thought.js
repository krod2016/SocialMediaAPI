const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
  {
    thoughtText: {
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
    reactions:
      [
      reactionSchema
      ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
  },
  {
    Id: false
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
  // ((total, comment) => total + comment.replies.length + 1, 0);
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
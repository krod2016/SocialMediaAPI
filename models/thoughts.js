const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
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
      virtuals: true,
    },
    id: false
  }
);

const ThoughtsSchema = new Schema(
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
    toJSON: {
      virtuals: true,
      getters: true
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

// get total count of comments and replies on retrieval
ThoughtsSchema.virtual('commentCount').get(function () {
  return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
});

//create the pizza model using the pizza schema
const Pizza = model('Pizza', PizzaSchema);

//export pizza model
module.exports = Pizza;
const dateFormat = require("../utils/dateFormat");
// sets up the connection to the mongoose database
const { Schema, model, Types } = require("mongoose");

// sets up the reaction schema for use within mongoose
const reactionSchema = new Schema(
  {
    // reaction id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    // reaction body - limit to 280 characters
    reactionBody: {
      type: String,
      maxlength: 280,
      required: true,
    },
    // username
    username: {
      type: String,
      required: true,
    },
    // sets the timestamp for when it was created
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// sets up the thoughts schema for use within mongoose
const thoughtSchema = new Schema(
  {
    // thought - limit of 280 characters
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    // timestamp for when it was creeated
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    // username
    username: {
      type: String,
      required: true,
    },
    // reactions
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

//get count of reactions & count of replies
thoughtSchema.virtual("reactionCount").get(function() {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;

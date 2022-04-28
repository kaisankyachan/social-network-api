// ses up the connection to mongoose
const { Schema, model } = require("mongoose");

// sets up the user schema for use within mongoose
const userSchema = new Schema(
  {
    // username
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    // email
    email: {
      type: String,
      unique: true,
      required: true,
      match: [ // validates that the email address provided by the user is a properly formatted email address
        /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/,
        "You must provide a valid email address."
      ],
    },
    // thoughts
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought"
      },
    ],
    // friends
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// gets the count of user friends
userSchema.virtual("friendCount").get(function() {
  return this.friends.length;
});

// sets up the User model
const User = model("User", userSchema);

module.exports = User;

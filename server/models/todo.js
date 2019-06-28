var mongoose = require("mongoose");

var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true, //documentation on mongoose validators
    minlength: 1,
    trim: true //removes all leading and trailing spaces
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  createdAt: {
    type: Date,
    default: null
  }
});

module.exports = { Todo };

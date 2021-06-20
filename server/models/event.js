const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Event", eventSchema);

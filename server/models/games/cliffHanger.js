const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cliffHangerSchema = new Schema({
  highScore: {
    type: Number,
    required: true,
  },
  highScorePlayer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CliffHanger", cliffHangerSchema);

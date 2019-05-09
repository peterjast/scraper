var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var noteSchema = new Schema({
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  date: {
    type: Date,
    default: Date.now
  },
  noteText: String
}, { autoIndex: true, autoCreate: true });
var Note = mongoose.model("Note", noteSchema);
module.exports = Note;
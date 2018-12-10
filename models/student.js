const mongoose = require("mongoose");
Schema = mongoose.Schema;

  const studentSchema = new Schema({
  name: String,
  address: String,
  interests: [],
  courses: [{type: Schema.Types.ObjectId,
  ref: 'Course'}],
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
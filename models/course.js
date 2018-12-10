const mongoose = require('mongoose');
Schema = mongoose.Schema;


CourseSchema = new Schema({
coursecode: String,
courseName: String
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;

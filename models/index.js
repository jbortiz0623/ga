const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ga', { useNewUrlParser: true});

const Student = require('./student');
const Course = require('./course');



module.exports.Student = Student;
module.exports.Course = Course;
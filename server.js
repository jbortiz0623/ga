
/////*****VARIABLES
const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    db = require('./models');



////*******MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

///******ABOUT ME
// const jay = {
//   name: 'Jay',
//   address: 'San Jose',
//   interests: [],
//   courses: []
// }
// db.Student.create( jay, (err, newStudent)=> {
//   if(err) {return console.log(err)}
//   console.log('saved new student: ', newStudent);
// });

// const seeks = {
//   coursecode: '49',
//   courseName: 'Web Development Immersive'
// }
// db.Course.create( seeks, (err, newCourse)=> {
//   if (err) {return console.log(err)}
//   console.log('saved new course: ', newCourse);
// });


////******GET
app.get('/api/student', (req,res)=> {
  db.Student.find({})
  .exec((err, allstudents) =>{ 
    if(err) {res.status(500).json({error: 'internal error'}); }
      res.json(allstudents);
  });
});

app.get('/api/course', (req,res)=> {
  db.Course.find({})
  .exec(function(err, allcourse){
    if(err){ res.status(500).json({error: 'internal error'}); }
      res.json(allcourse);
  });
});
////////******SHOW
app.get('/api/student/:id', (req, res) => {
  db.Student.findById(req.params.student_id)
  .exec((err, students) => {
    if(err) { console.log('index error: '+err); res.sendStatus(500); } 
    res.json(students[i]);
  });
});

app.get('/api/student/:id', (req, res) => {
var studentId = req.params.id;
  db.Student.findById({ _id: studentId })
  .exec((err, onestudent) => {
    if(err) { return console.log(err) }
    res.json(onestudent);
  });
});

app.get('/api/course', (req,res)=>{
  var courseId = req.params.id;
  db.Course.findById()
})
/////******CREATE
app.post('/api/student', (req, res)=> {
var newStudent = new db.Student({
    name: req.body.name,
    address: req.body.address,
    interests: req.body.interests,
    courses: req.body.courses
  });
  ///saved new student to database
  newStudent.save((err, savedStudent) =>{
    if (err) { res.status(500).json({error:'internal error: ',address: err}); }
      console.log(err);
      res.json(savedStudent);
  });
});

app.post('/api/course', (req,res) => {
  var newCourse = new db.Course({
      coursecode: req.body.coursecode,
      courseName: req.body.courseName 
  });
    db.Student.create(newCourse, (err, newStudent) => {
      if (err) { return console.log('internal error', err) ; }
      console.log('created new', newStudent);
      res.json(newStudent);
    });
});
/////////********UPDATE
app.put('/api/student', (req, res) => {
  let studentId = req.params.id;
  let updatestudent = req.body;
  db.Student.findOneAndUpdate(
      { _id: studentId }, 
      updatestudent, 
      {new:true}, 
      (err, updatestudent) => { 
        if(err) { return console.log('internal error', err) ; }
      res.json(updatestudent);
  });
});
app.put('/api/course', (req,res)=>{
  let courseId = req.params.id;
  let updatecourse = req.body;
  db.Course.findOneAndUpdate(
    {_id: courseId},
    updatecourse,
    {new:true},
    (err, updatecourse)=> {
      if (err) {return console.log('internal errro', err) ; }
      res.json(updatecourse);
    });
});

app.delete('/api/student/:id', (req,res)=>{
  let studentId = req.params.id;
  db.Student.deleteOne(
    {_id: studentId},
    (err, deletedStudent) => {
      if(err) { return console.log(err) }
      res.json(deletedStudent);
    });
  });


app.delete('/api/course/:id', (req, res) => {
  let courseId = req.params.id;
  db.Course.deleteOne(
      { _id: courseId },
      (err, deletedCourse) => {
          if(err) { return console.log(err) }
          res.json(deletedCourse);
  });
});


app.listen(process.env.PORT || 3000, () => {
  console.log("ga is listening http://localhost:3000/");
});
const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const cors = require('cors');
// const admin = require('./firebase');


//define routes
const commentsRouter = require('./routes /comments');



// -------- MIDDLEWARE
app.use(cors());
// parse application/x-www-form-urlencoded
//cors calls backend from frontend or else it will block u
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// routes
app.use('/comment',commentsRouter)



app.use((err, req, res, next) => {
  res.status(400).json({error: err.toString()});
});


// -------- ROUTES
app.get('/comment', (req, res) => {
  res.json('Hello world');
})

app.use('/comment', commentsRouter); 

app.listen(port, ()=>{
  console.log(`listening at port ${port}`)
} )

module.exports={app}
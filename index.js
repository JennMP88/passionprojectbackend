//define routes
const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('./firebase');
const commentsRouter = require('./routes /comments');
const storiesRouter = require('./routes /stories');


// -------- MIDDLEWARE
app.use(cors());
// parse application/x-www-form-urlencoded
//cors calls backend from frontend or else it will block u
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


const checkFirebaseToken = (req, res, next) => {
  const { token } = req.body;

  admin.auth().verifyIdToken(token)
    .then(function(decodedToken) {
      var uid = decodedToken.uid;
      // decodedToken=decodedToken.uid;
      next();
    }).catch(function(error) {
      // Handle error
      res.json('ERROR!!!!')
    });
}



// routes
app.use('/comment',commentsRouter)
app.use('/stories',storiesRouter)



app.use((err, req, res, next) => {
  res.status(400).json({error: err.toString()});
});


// -------- ROUTES
app.get('/comment', (req, res) => {
  res.json('Hello world');
})

// //protected: uses firebase middleware
// app.post('/unprotected', (req, res) => {
//   const { email, id } = req.body;
//   res.json(`Welcome! You are user ${email} with ${id}`);
// })

// app.post('/protected', checkFirebaseToken, 
// //,bouncer2,
// (req, res) => {
//   res.json(`This is some sensitive data`);
// })

//-----------------------
app.use('/comment', commentsRouter); 

app.listen(port, ()=>{
  console.log(`listening at port ${port}`)
} )

module.exports={app}



//-------------------------------------------------------------THERE
// const express = require('express');
// const app = express();
// const port = 8080;
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const admin = require('./firebase');

// // -------- MIDDLEWARE
// app.use(cors());
// // parse application/x-www-form-urlencoded
// //cors calls backend from frontend or else it will block u
// app.use(bodyParser.urlencoded({ extended: false }))
// // parse application/json
// app.use(bodyParser.json())

// const checkFirebaseToken = (req, res, next) => {
//   const { token } = req.body;

//   admin.auth().verifyIdToken(token)
//     .then(function(decodedToken) {
//       var uid = decodedToken.uid;
//       // decodedToken=decodedToken.uid;
//       next();
//     }).catch(function(error) {
//       // Handle error
//       res.json('ERROR!!!!')
//     });
// }



// //if you want to delete a user 
// //delete/user/jen you can also use the function below and do a check

// //--------------------------------------------------

// //how do i check if this is the user who should be performing a particular action?
// // decodedToken=decodedToken.uid;
// //get the users uid
// // const uidInPostgress='';
// // const uidindecodedtken=req.decodedToken.uid;            //-------- look above 
// // if (uidInPostgress===uidindecodedtken){
// //   next();
// //  } else{
// //     res.json({error:'you are not the valid user'})
// //   }




// //const bouncer2=()={}
// // -------- ROUTES
// app.get('/', (req, res) => {
//   res.json('Hello world');
// })

// //protected: uses firebase middleware
// app.post('/unprotected', (req, res) => {
//   const { email, id } = req.body;
//   res.json(`Welcome! You are user ${email} with ${id}`);
// })

// app.post('/protected', checkFirebaseToken, 
// //,bouncer2,
// (req, res) => {
//   res.json(`This is some sensitive data`);
// })

// app.listen(port, () => {
//   console.log('Server listening on port: '+port);
// })
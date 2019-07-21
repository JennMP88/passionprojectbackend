const express=require('express')
const commentsRouter=express.Router();
const CommentsServices=require('../services/comments')

//Get all comments 
commentsRouter.get('/', (req, res, next) => {  
  CommentsServices.renderpics()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

module.exports=commentsRouter;
const express=require('express')
const storiesRouter=express.Router();
const StoriesServices=require('../services/stories')


//Post new story 
storiesRouter.post('/newstory', (req, res, next) => {
  const {stories_displayed,user_id} = req.body;
  StoriesServices.create(stories_displayed,user_id)
    .then(data => {
      res.json({success: `Created story successfully`});
    })
    .catch(err => {
        console.log(err)
      next(err);
    })
});

//Get all stories
storiesRouter.get('/', (req, res, next) => {  
  StoriesServices.renderstories()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

module.exports=storiesRouter;
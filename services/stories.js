const {db} = require('./dbConnect');
const StoriesServices = {};

//Post new story
StoriesServices.create = (stories_displayed,user_id) => {
  const sql = `INSERT INTO stories (stories_displayed,user_id) VALUES ($[stories_displayed], $[user_id])`;
  return db.none(sql, {stories_displayed,user_id});
}

//Get all stories
StoriesServices.renderpics= () => {
  const sql = `SELECT stories_displayed 
  FROM stories `
  return db.any(sql, {});
}


module.exports = StoriesServices;
const {db} = require('./dbConnect');
const CommentsServices = {};


//Get all comments
CommentsServices.renderpics= () => {
  const sql = `SELECT *
  FROM comments`
  return db.any(sql, {});
}


module.exports = CommentsServices;
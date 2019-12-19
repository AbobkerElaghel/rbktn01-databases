var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      var sql = "select messages.id, messages.text, messages.roomname from messages left outer join users on (messages.userid = user.id) order by messages by messages.id desc ";
      db.query(sql,(err,res)=>{cb(res)})
    }, // a function which produces all the messages
    post: function (params,cb) {
      var sql = "insert info messages values (?,(select id from users on (messages.userid = users.id)),?)";
      db.query(sql,params,(err ,res)=>{  cb(res)  });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      var sql = 'select * from users';
      db.query(sql ,(err,res)=>{cb(res)});
    },
    post: function (param,cb) {
      var sql = 'insert into users values(?)';
      db.query(sql, params,(err ,res)=>{cb(res)});
    }
  }
};


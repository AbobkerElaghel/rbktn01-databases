var models = require('../models');
var bluebird = require('bluebird');
module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get( (err,results)=>{
        res.json(results);
      } )
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post([ req.body[text],req.body[username],req.body[roomname]] ,(err,results)=>{
        res.json(results);
      } )
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.messages.get( (err,results)=>{
        res.json(results);
      } )
    },
    post: function (req, res) {
      models.messages.get([req.body[username]], (err,results)=>{
        res.json(results);
      } )
    }
  }
};


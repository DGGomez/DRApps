'use strict';
var mongoose = require('mongoose');
var updates = mongoose.model('Data');
const moment = require('moment');
const nodemailer = require('nodemailer');

var auth = {
    type: 'oauth2',
    user: 'WillMurrayApps@gmail.com',
    clientId: process.env.ID,
    clientSecret: process.env.SECRET,
    refreshToken: process.env.REFRESH,
};

exports.send = async function(req, res) {

  try{
   var response = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }
  
  var mailOptions = {
      from: req.body.name,
      to: 'WillMurrayApps@gmail.com',
      subject: 'My site contact from: ' + req.body.name,
      text: req.body.message,
      html: 'Message from: ' + req.body.name + '<br></br> Email: ' +  req.body.email + '<br></br> Message: ' + req.body.message,
  };
  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: auth,
  });
transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
          return console.log(err);
      } else {
          console.log(JSON.stringify(res));
      }
  });
  }
  catch(err){
    console.log(err);
    res.status(400).send({ message: error });
  }
};

exports.read = async function(req, res) {
  try{
  var status = 0;
  console.log("hit");
  mongoose.connection.db.collection("Updates", function(err,orders){
    if (err){
      console.log(err);

      res.send(err);
    }
    updates.find({}).toArray(function(err, data) {
      if (err){
        console.log(err);
        res.send(err);
      }
        console.log(data);
        res.json(data);
      
  });
});
  }
  catch(err){
    console.log(err);
    res.status(400).send({ message: error });

  }
}

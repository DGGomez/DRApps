const express = require('express');
var authenticate = require('../middleware/authenticate');

module.exports = function(app, db) {
var dataList = require('../controllers/dataController');

app.route('/read')
    .post(dataList.read);
    
app.route('/send')
    .post(dataList.send);

}

const express = require('express');

module.exports = function(app, db) {
var dataList = require('../controllers/dataController');

app.route('/read')
    .get(dataList.read);
    
app.route('/send')
    .post(dataList.send);

}

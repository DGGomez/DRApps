'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DataSchema = new Schema({
  event: {
    type: String
  },
  description: {
    type: String
  },
  links: {
    type: String
  }
});

module.exports = mongoose.model('Data', DataSchema);

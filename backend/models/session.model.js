var mongoose = require('mongoose');
var sessionSchema = new mongoose.Schema({
    sessionId: String });

var Session = mongoose.model('Session', sessionSchema,'sessions');
module.exports = Session;
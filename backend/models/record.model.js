var mongoose = require('mongoose');
var recordSchema = new mongoose.Schema({
    id: String,
    content: String,
    quantity : {type : Number, default : 0},
    description: String
    });

var Product = mongoose.model('Record', recordSchema,'record');
module.exports = Product;
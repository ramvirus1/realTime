var mongoose = require('mongoose');
var schema = mongoose.Schema;

var _messageSchema = new schema({
    id:Number,
    name:String,
    chat:String,
    time:Date,
    seen:Boolean
});

module.exports = mongoose.model("Message",_messageSchema);



var mongoose = require("mongoose");
var _messageSchema = require("../schemas/message.schema");

var _messageAdapter = {
    getMessageById = function(_messageId){

    },
    getMessageHistory = function(_from,_end){
     
    },
    updateMessageParamsById = function(id){
        
    },
    addNewMessage = function(messageModel){
        var _msg = new _messageSchema({
            name:_messageModel.name,
            chat:_messageModel.chat,
            time:_messageModel.time,
            seen:_messageModel.seen,
            sendTo:_messageModel.sendTo
        });
        _msg.save(function(err,saved) {
            if (err) throw err;
            console.log("Message Saved Successfully");
        });
    }
};

module.exports = _messageAdapter;
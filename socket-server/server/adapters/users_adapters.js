var mongoose = require("mongoose");
var _appSchema = require("../schemas/app.schema");

var _usersAdapters = {
    getApplicationDetailsById = function(appId){

    },
    insertNewApplicationDetails = function(_appDetails){
        var _app = new _appSchema({
            applicationIdentifier:_appDetails.applicationIdentifier,
            applicationName:_appDetails.applicationName,
            author:_appDetails.author,
            organisation:_appDetails.organisation
        });
        _app.save(function(err, sentReply) {
            if (err) throw err;
            console.log("Application Saved Successfully");
        });
    }
};

module.exports = _usersAdapters;
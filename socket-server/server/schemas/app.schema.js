var mongoose = require('mongoose');
var schema = mongoose.Schema;

var _appSchema = new schema({
  applicationIdentifier:String,
  applicationName:String,
  author:String,
  organisation:String  
});

module.exports = mongoose.model("Application",_appSchema);

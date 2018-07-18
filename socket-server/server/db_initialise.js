var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/rtc").then(function(err,db){
    if (err) throw console.log("Error in DB Connection" + err);
});

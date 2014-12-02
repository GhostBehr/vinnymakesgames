var mongoose = require('mongoose');
var uri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/app24551415";
// var uri = "mongodb://user:pass@dogen.mongohq.com:10046/app24551415";

exports.createModel = function(name, schema) {
    var tempSchema = mongoose.Schema(schema);
    return mongoose.model(name, tempSchema);
}

exports.query = function(queryFunc, callback, errorFunc) {
    mongoose.connect(uri);
    
    mongoose.connection.on('error', function() {
        console.log("Error connecting to mongoDB");
    });

    mongoose.connection.once('open', function() {
        var query = queryFunc();
        
        query.exec(function(err, results) {

            if (err) {
                if (errorFunc == undefined)
                    console.log("Query error: " + queryFunc);
                else
                    errorFunc(err);
            }

            mongoose.connection.close();
            callback(results);
        })
    });
}
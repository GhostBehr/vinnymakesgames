var mongoose = require('mongoose');
var db = require('./database');

var Piece = db.createModel('Piece', {
    _id: mongoose.Schema.Types.ObjectId,
    url: String,
    title: String,
    contentType: String,
    content: {
        src: String,
        width: Number,
        height: Number
    },
    description: { 
        date: String,
        short: String,
        long: String,
        tech: [String],
        highlights: [String],
        controls: [{
            key: String,
            action: String,  
        }]
    }
});

exports.getAll = function(callback) {
    db.query(function() {   //query
        return Piece.find({}).sort('-description.date title');
    },
    function(results) {     // callback
        callback({pieces : results});
    });
}

exports.getPiece = function(url, callback) {
    db.query(function() {   //query
        return Piece.find({"url" : url}).sort('-description.date title');
    },
    function(results) {     // callback
        callback(results[0]);
    },
    function(err) {         // custom error
        if (err) {
            var err = new Error('Not Found');
            err.status = 404;
            throw err;
        }
    });
}

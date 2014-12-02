var mongoose = require('mongoose');
var db = require('./database');

var NewsItem = db.createModel('new', {
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    date: Date,
    tags: [String],
    content: String
}, {
    collection: 'news'
});

exports.getAll = function(callback) {
    db.query(function() {   //query
        return NewsItem.find({}).sort('-date');
    },
    function(results) {     // callback
        callback({news : results});
    });
}

exports.getRecent = function(max, callback) {
    db.query(function() {   //query
        return NewsItem.find({}).sort('-date').limit(max);
    },
    function(results) {     // callback
        callback({news : results});
    });
}

exports.getNewsItem = function(url, callback) {
    db.query(function() {   //query
        return NewsItem.find({"_id" : url}).sort('-date');
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
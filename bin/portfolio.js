var mongoose = require('mongoose');
var uri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/app24551415";

var pieceSchema = mongoose.Schema({
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

var Piece = mongoose.model('Piece', pieceSchema);

exports.getAll = function(callback) {
    mongoose.connect(uri);

    var db = mongoose.connection;

    db.on('error', function() {
        console.log("Error connecting to mongoDB");
    });

    db.once('open', function() {

        Piece.find({}).sort('-description.date title').exec(function(err, pieces) {
            if (err) console.log("err?");

            db.close();
            callback({pieces : pieces});
        });

    });
}

exports.getPiece = function(url, callback) {
    mongoose.connect(uri);

    var db = mongoose.connection;

    db.on('error', function() {
        console.log("Error connecting to mongoDB");
    });

    db.once('open', function() {

        Piece.find({"url" : url}).sort('-description.date title').exec(function(err, piece) {
            if (err) {
                var err = new Error('Not Found');
                err.status = 404;
                throw err;
            }

            db.close();
            callback(piece[0]);
        });

    });
}

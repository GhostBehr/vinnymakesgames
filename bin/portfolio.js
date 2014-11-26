var fs = require('fs');

exports.getAll = function() {
    var portfolioJSON = JSON.parse(fs.readFileSync('data/portfolioPieces.json', 'utf8'));
    return portfolioJSON;
}

exports.getPiece = function(id) {
    console.log('get portfolio piece ' + id);

    var piecesJSON = JSON.parse(fs.readFileSync('data/portfolioPieces.json', 'utf8'));

    for (var i = 0; i < piecesJSON.pieces.length; ++i) {
        if (piecesJSON.pieces[i].id == id)
            return piecesJSON.pieces[i];
    }

    var err = new Error('Not Found');
    err.status = 404;
    throw err;
}
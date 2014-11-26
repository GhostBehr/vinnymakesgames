var express = require('express');
var router = express.Router();

var portfolio = require('./portfolio');

/* GET home page. */
router.get('/', function (req, res) {
    var portfolioJSON = portfolio.getAll();

    res.render('home', portfolioJSON);
});


router.get('/portfolio/:pieceID', function (req, res) {
    var id = req.params.pieceID;
    var pieceJSON = portfolio.getPiece(id);
    // console.log(piece);

    res.render('portfolio', pieceJSON);
})


router.get('/scraps/backgroundgame', function (req, res) {
    res.render('backgroundgame', { title: 'VinnyMakesGames: The Game'});
})

module.exports = router;

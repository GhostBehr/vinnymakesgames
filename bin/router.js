var express = require('express');
var router = express.Router();

var portfolio = require('./portfolio');

/* GET home page. */
router.get('/', function (req, res) {
    portfolio.getAll(function(data) {
        res.render('home', data);
    });
});


router.get('/portfolio/:pieceURL', function (req, res) {
    var url = req.params.pieceURL;

    portfolio.getPiece(url, function(data) {
        res.render('portfolio', data);
    });
})


router.get('/scraps/backgroundgame', function (req, res) {
    res.render('backgroundgame', { title: 'VinnyMakesGames: The Game'});
})

module.exports = router;

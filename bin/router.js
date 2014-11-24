var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('home', { title: 'VinnyMakesGames' });
});


router.get('/portfolio/:pieceID', function (req, res) {
    var id = req.params.pieceID;

    var portfolio = require('./portfolio');
    var piece = portfolio.getPiece(id);
    // console.log(piece);

    res.render('portfolio', piece);
})


router.get('/scraps/backgroundgame', function (req, res) {
    res.render('backgroundgame', { title: 'VinnyMakesGames: The Game'});
})

module.exports = router;

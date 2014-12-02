var express = require('express');
var router = express.Router();

var portfolio = require('./portfolio');
var newspaper = require('./news');


/* GET home page. */
router.get('/', function (req, res) {
    portfolio.getAll(function(portfolioData) {
        newspaper.getRecent(3, function(newsData) {
            res.render('home', {
                title: 'VinnyMakesGames | Home',
                pieces: portfolioData.pieces,
                news: newsData.news
            });
        })
    });
});


router.get('/portfolio/:pieceURL', function (req, res) {
    var url = req.params.pieceURL;

    portfolio.getPiece(url, function(data) {
        res.render('portfolio', data);
    });
})

router.get('/news/:pieceURL', function (req, res) {
    var url = req.params.pieceURL;

    newspaper.getNewsItem(url, function(data) {
        res.render('news', data);
    });
})

router.get('/news/tags/:tag', function (req, res) {
    var tag = req.params.tag;

    newspaper.getAllWithTag(tag, function(data) {
        res.render('tagSearch', data);
    });
})


router.get('/scraps/backgroundgame', function (req, res) {
    res.render('backgroundgame', { title: 'VinnyMakesGames: The Game'});
})

module.exports = router;

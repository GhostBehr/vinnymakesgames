var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'VinnyMakesGames' });
});

router.get('/wip', function (req, res) {
    res.render('home', { title: 'VinnyMakesGames: How did you get here?'})
})

router.get('/wip/game', function (req, res) {
    res.render('game', { title: 'VinnyMakesGames: The Game' });
});

module.exports = router;

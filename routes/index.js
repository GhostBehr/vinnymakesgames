var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Vinnymakesgames' });
});

router.get('/game', function (req, res) {
    res.render('game', { title: 'Vinnymakesgames' });
});

module.exports = router;

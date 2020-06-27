var express = require('express');
var router = express.Router();

//render la page de l'app lorsque localhost.
router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
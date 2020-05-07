var express = require('express');
var router = express.Router();
var digitalToolkitAPI = require('../digitalToolkit.json');

/* GET api. */
router.get('/', function(req, res, next) {
    res.json(digitalToolkitAPI);
});

module.exports = router;

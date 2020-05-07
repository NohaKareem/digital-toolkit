var express = require('express');
var router = express.Router();
var digitalToolkitRefs = require('../digitalToolkit.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Digital Toolkit', digitalToolkitRefs:digitalToolkitRefs });
});

module.exports = router;

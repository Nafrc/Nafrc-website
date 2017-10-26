var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NAFRC' });
});

/* GET home page. */
router.get('/viewwings', function(req, res, next) {
  res.render('wings', { title: 'NAFRC-Wings' });
});

/* GET home page. */
router.get('/workshop', function(req, res, next) {
  res.render('workshops', { title: 'NAFRC-workshop-products' });
});
module.exports = router;

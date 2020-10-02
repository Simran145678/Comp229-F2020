var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',  { title: 'Home' ,});
});

router.get('/home', function(req, res, next) {
  res.render('index',  { title: 'Home' ,});
});

/* GET About page. */
router.get('/About', function(req, res, next) {
  res.render('index',  { title: 'About' ,});
});
/* GET Products page. */
router.get('/Products', function(req, res, next) {
  res.render('index',  { title: 'Products' ,});
});
/* GET services page. */
router.get('/Services', function(req, res, next) {
  res.render('index',  { title: 'Services' ,});
});

/* GET Contact us page. */
router.get('/Contact', function(req, res, next) {
  res.render('index',  { title: 'Contact' ,});
});

module.exports = router;

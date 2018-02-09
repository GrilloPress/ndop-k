var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'index' );
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render( 'index' );
});

// GET v1 index page.
router.get('/K', function(req, res, next) {
  res.render( 'K/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/K/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'K/' + theView );
});

router.get('/K/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'K/' + theDir + '/' + theView );
});

router.get('/K/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'K/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

module.exports = router;

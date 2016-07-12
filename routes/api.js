var express = require('express');
var router = express.Router();
var blogDao = require('../dao/blogpost/blogDao.js');
var siteDao = require('../dao/site/siteDao.js');

/* GET home page. */
router.get('/getposts', function(req, res, next) {
	blogDao.select(req, res, next); 
});
router.get('/getsites', function(req, res, next) {
	siteDao.select(req, res, next);
});
module.exports = router;

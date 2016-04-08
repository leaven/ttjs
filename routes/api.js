var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var blogDao = require('../dao/blogDao.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	request('http://toutiao.io/subjects/17377', function(err, response, body) {
		var $ = cheerio.load(body);
		var contents = [],
			$selectors = $('.content a');
		for(var i = 0, len = $selectors.length; i < len; i++) {
			contents.push([
				$selectors[i].attribs.href,
				$selectors[i].children[0].data
			]);
		}
		 // res.json({
		 // 	errno: 0,
		 // 	data: contents
		 // });
		 blogDao.add(req, res, next, contents);
		// console.log(contents);
	})
 	 // res.render('index', { title: 'Express' });
});

module.exports = router;

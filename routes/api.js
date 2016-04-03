var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
	request('http://toutiao.io/subjects/17377', function(err, response, body) {
		var $ = cheerio.load(body);
		var contents = [],
			$selectors = $('.content a');
		for(var i = 0, len = $selectors.length; i < len; i++) {
			contents.push({
				url: $selectors[i].attribs.href,
				value: $selectors[i].children[0].data
			});
		}
	})
 	 res.render('index', { title: 'Express' });
});

module.exports = router;

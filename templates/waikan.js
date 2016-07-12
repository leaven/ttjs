var cheerio = require('cheerio');
var blogDao = require('../dao/blogpost/blogDao.js');
var siteDao = require('../dao/site/siteDao.js');
var metaSort = require('../utils/metaSort.js');

module.exports = function(body, url) {
	var $ = cheerio.load(body);
	$('.hentry').each(function(v, i) {

	});
}
var request = require('request');
var cheerio = require('cheerio');

var sites = require('../conf/sites.js');
var templates = require('../templates/');

var siteTemplates = {
	'alloyteam': templates.alloyteam,
	'taobaofed': templates.taobaofed
}
// request('http://toutiao.io/subjects/17377', function(err, response, body) {
// 	// var $ = cheerio.load(body);
// 	// var contents = [],
// 	// 	$selectors = $('.content a');
// 	// for(var i = 0, len = $selectors.length; i < len; i++) {
// 	// 	contents.push([
// 	// 		$selectors[i].attribs.href,
// 	// 		$selectors[i].children[0].data
// 	// 	]);
// 	// }
// 	// var contents = siteTemplates
// 	 // res.json({
// 	 // 	errno: 0,
// 	 // 	data: contents
// 	 // });
// 	blogDao.add(req, res, next, contents);
// })
sites.forEach(function(v, k) {
	request(v.url, function(err, response, body) {
		siteTemplates[v.site](body, v.url)
	})
	
})


var request = require('request');
var cheerio = require('cheerio');

var sites = require('../conf/sites.js');
var templates = require('../templates/');

var siteTemplates = {
	'alloyteam': templates.alloyteam,
	'taobaofed': templates.taobaofed,
	'waikan': templates.waikan
}

sites.forEach(function(v, k) {
	request(v.url, function(err, response, body) {
		siteTemplates[v.site](body, v.url)
	})
	
})

